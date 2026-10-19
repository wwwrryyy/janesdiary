'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import { getAssetPath } from '@/lib/utils';
import { Badge } from '@/components/common/Badge';
import { Maximize2, RotateCcw, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface GraphNode {
  id: string;
  name: string;
  era: string;
  type: 'author' | 'theme';
  works?: string[];
  bio?: string;
  essaySlug?: string;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
}

interface GraphLink {
  source: string | GraphNode;
  target: string | GraphNode;
  relation: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export const ConstellationGraph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [data, setData] = useState<GraphData | null>(null);
  const [selectedEra, setSelectedEra] = useState<string>('All');
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [activeNode, setActiveNode] = useState<GraphNode | null>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Fetch graph data
  useEffect(() => {
    fetch(getAssetPath('/data/graph.json'))
      .then((res) => res.json())
      .then((json: GraphData) => {
        // Initialize positions in a circular layout
        const width = 800;
        const height = 500;
        const radius = Math.min(width, height) * 0.35;
        const nodesWithPos = json.nodes.map((node, i) => {
          const angle = (i / json.nodes.length) * 2 * Math.PI;
          return {
            ...node,
            x: width / 2 + radius * Math.cos(angle) + (Math.random() - 0.5) * 40,
            y: height / 2 + radius * Math.sin(angle) + (Math.random() - 0.5) * 40,
            vx: 0,
            vy: 0,
          };
        });
        setData({ nodes: nodesWithPos, links: json.links });
      })
      .catch((err) => console.error('Failed to load constellation data', err));
  }, []);

  // Filter nodes based on selected era
  const eras = useMemo(() => {
    return [
      'All',
      '1st-Wave Gothic',
      'Romantic Proto-Feminism',
      'Modernist Materialism',
      'Subaltern / Dalit Feminism',
      'Anti-Colonial Utopianism',
      'Cyberfeminism',
    ];
  }, []);

  // Force simulation loop on canvas
  useEffect(() => {
    if (!data || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const nodes = data.nodes;
    const links = data.links;

    // Resolve link node references
    const nodeMap = new Map(nodes.map((n) => [n.id, n]));

    const tick = () => {
      // Simple force simulation
      const width = canvas.width;
      const height = canvas.height;
      const center = { x: width / 2, y: height / 2 };

      // Center force & Repulsion
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        if (n1.x === undefined || n1.y === undefined) continue;

        // Pull toward center
        n1.vx = (n1.vx || 0) + (center.x - n1.x) * 0.0006;
        n1.vy = (n1.vy || 0) + (center.y - n1.y) * 0.0006;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          if (n2.x === undefined || n2.y === undefined) continue;
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const distSq = dx * dx + dy * dy + 1;
          const dist = Math.sqrt(distSq);
          if (dist < 180) {
            const force = 35 / distSq;
            n1.vx = (n1.vx ?? 0) + (dx / dist) * force;
            n1.vy = (n1.vy ?? 0) + (dy / dist) * force;
            n2.vx = (n2.vx ?? 0) - (dx / dist) * force;
            n2.vy = (n2.vy ?? 0) - (dy / dist) * force;
          }
        }
      }

      // Link attraction
      for (const link of links) {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        const s = nodeMap.get(sourceId);
        const t = nodeMap.get(targetId);
        if (s && t && s.x !== undefined && s.y !== undefined && t.x !== undefined && t.y !== undefined) {
          const dx = t.x - s.x;
          const dy = t.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const desired = 90;
          const force = (dist - desired) * 0.0018;
          s.vx = (s.vx ?? 0) + (dx / dist) * force;
          s.vy = (s.vy ?? 0) + (dy / dist) * force;
          t.vx = (t.vx ?? 0) - (dx / dist) * force;
          t.vy = (t.vy ?? 0) - (dy / dist) * force;
        }
      }

      // Dampening and position update
      for (const n of nodes) {
        if (n.x !== undefined && n.y !== undefined) {
          n.vx = (n.vx || 0) * 0.88;
          n.vy = (n.vy || 0) * 0.88;
          n.x += n.vx;
          n.y += n.vy;
          // Boundary clamp
          n.x = Math.max(40, Math.min(width - 40, n.x));
          n.y = Math.max(40, Math.min(height - 40, n.y));
        }
      }

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(transform.x, transform.y);
      ctx.scale(transform.k, transform.k);

      // Connected nodes set for hover
      const connectedNodeIds = new Set<string>();
      if (hoveredNode) {
        connectedNodeIds.add(hoveredNode.id);
        links.forEach((l) => {
          const sId = typeof l.source === 'object' ? l.source.id : l.source;
          const tId = typeof l.target === 'object' ? l.target.id : l.target;
          if (sId === hoveredNode.id) connectedNodeIds.add(tId);
          if (tId === hoveredNode.id) connectedNodeIds.add(sId);
        });
      }

      // Draw Links
      for (const link of links) {
        const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
        const targetId = typeof link.target === 'object' ? link.target.id : link.target;
        const s = nodeMap.get(sourceId);
        const t = nodeMap.get(targetId);
        if (!s || !t || s.x === undefined || s.y === undefined || t.x === undefined || t.y === undefined) continue;

        const isHighlighted = hoveredNode && (s.id === hoveredNode.id || t.id === hoveredNode.id);
        const isDimmed = hoveredNode && !isHighlighted;

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.strokeStyle = isHighlighted ? '#0c0a09' : '#e7e5e4';
        ctx.lineWidth = isHighlighted ? 1.5 : 1;
        ctx.globalAlpha = isDimmed ? 0.12 : isHighlighted ? 0.9 : 0.6;
        ctx.stroke();
      }

      // Draw Nodes
      for (const node of nodes) {
        if (node.x === undefined || node.y === undefined) continue;

        const matchesEra = selectedEra === 'All' || node.era === selectedEra;
        const isHovered = hoveredNode?.id === node.id;
        const isConnected = connectedNodeIds.has(node.id);
        const isDimmed = (hoveredNode && !isConnected) || (!matchesEra && selectedEra !== 'All');

        ctx.globalAlpha = isDimmed ? 0.2 : 1;

        if (node.type === 'author') {
          // Author node: circular plate with ink border
          const radius = isHovered ? 14 : 11;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
          ctx.fillStyle = isHovered ? '#0c0a09' : '#ffffff';
          ctx.fill();
          ctx.strokeStyle = '#0c0a09';
          ctx.lineWidth = isHovered ? 2 : 1.5;
          ctx.stroke();

          // Small center dot if not hovered
          if (!isHovered) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = '#0c0a09';
            ctx.fill();
          }

          // Node Label
          ctx.font = isHovered ? '600 12px Inter' : '400 11px Inter';
          ctx.fillStyle = '#0c0a09';
          ctx.textAlign = 'center';
          ctx.fillText(node.name.split(' ').pop() || node.name, node.x, node.y + radius + 13);
        } else {
          // Theme node: subtle diamond or pastel circle
          const radius = isHovered ? 8 : 6;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
          ctx.fillStyle = '#f0efed';
          ctx.fill();
          ctx.strokeStyle = '#a8a29e';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.font = '500 9px Inter';
          ctx.fillStyle = '#777169';
          ctx.textAlign = 'center';
          ctx.fillText(node.name, node.x, node.y + radius + 11);
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [data, selectedEra, hoveredNode, transform]);

  // Pointer interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current || !data) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - transform.x) / transform.k;
    const mouseY = (e.clientY - rect.top - transform.y) / transform.k;

    if (isDraggingRef.current) {
      setTransform((prev) => ({
        ...prev,
        x: prev.x + (e.clientX - dragStartRef.current.x),
        y: prev.y + (e.clientY - dragStartRef.current.y),
      }));
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      return;
    }

    // Find node under mouse
    const found = data.nodes.find((n) => {
      if (n.x === undefined || n.y === undefined) return false;
      const dx = n.x - mouseX;
      const dy = n.y - mouseY;
      return Math.sqrt(dx * dx + dy * dy) < 18;
    });

    setHoveredNode(found || null);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleClick = () => {
    if (hoveredNode) {
      setActiveNode(hoveredNode);
    }
  };

  return (
    <div className="relative rounded-2xl border border-hairline bg-surface-card shadow-soft overflow-hidden">
      {/* Top Filter & Controls Bar */}
      <div className="p-4 sm:p-5 border-b border-hairline flex flex-wrap items-center justify-between gap-3 bg-canvas-soft">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-muted" />
          <span className="font-serif text-base font-light text-ink">
            Intersectional Lineages
          </span>
          <span className="text-xs text-muted font-mono hidden sm:inline">
            (14 Core Authors · 23 Cross-Era Edges)
          </span>
        </div>

        {/* Era Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full">
          {eras.map((era) => (
            <button
              key={era}
              onClick={() => setSelectedEra(era)}
              className={`px-3 py-1 rounded-pill text-[11px] font-sans font-medium transition-all shrink-0 ${
                selectedEra === era
                  ? 'bg-primary text-white'
                  : 'bg-white border border-hairline text-body hover:text-ink hover:bg-surface-strong'
              }`}
            >
              {era}
            </button>
          ))}
          <button
            onClick={() => setTransform({ x: 0, y: 0, k: 1 })}
            className="p-1.5 rounded-full bg-white border border-hairline text-muted hover:text-ink shrink-0 ml-1"
            title="Reset Canvas View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Canvas Viewport */}
      <div className="relative h-[480px] sm:h-[540px] w-full bg-canvas/40 cursor-grab active:cursor-grabbing">
        <canvas
          ref={canvasRef}
          width={900}
          height={540}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={handleClick}
          className="w-full h-full block"
        />

        {/* Floating Tooltip / Info Card */}
        {hoveredNode && (
          <div className="absolute top-4 left-4 z-20 max-w-xs p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-hairline shadow-elevated pointer-events-none transition-all">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="font-serif text-sm font-medium text-ink">
                {hoveredNode.name}
              </span>
              <Badge variant="default" className="text-[9px]">
                {hoveredNode.era}
              </Badge>
            </div>
            {hoveredNode.bio && (
              <p className="text-[11px] text-muted line-clamp-2 leading-relaxed">
                {hoveredNode.bio}
              </p>
            )}
            <p className="text-[10px] text-primary/80 font-mono mt-1.5">
              Click node to inspect analysis →
            </p>
          </div>
        )}

        {/* Selected Node Drawer / Bottom Sheet */}
        {activeNode && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-30 p-5 rounded-2xl bg-white border border-hairline shadow-modal transition-all animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h4 className="font-serif text-lg font-light text-ink">
                  {activeNode.name}
                </h4>
                <Badge variant="mint" className="text-[10px] mt-0.5">
                  {activeNode.era}
                </Badge>
              </div>
              <button
                onClick={() => setActiveNode(null)}
                className="text-xs text-muted hover:text-ink p-1 rounded-full"
              >
                ✕
              </button>
            </div>

            {activeNode.bio && (
              <p className="text-xs text-body leading-relaxed mb-3">
                {activeNode.bio}
              </p>
            )}

            {activeNode.works && (
              <div className="mb-3">
                <span className="font-mono text-[10px] text-muted uppercase">Key Analyzed Texts:</span>
                <ul className="text-xs text-ink list-disc list-inside mt-0.5">
                  {activeNode.works.map((w, idx) => (
                    <li key={idx} className="italic">{w}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeNode.essaySlug && (
              <Link
                href={`/essays/${activeNode.essaySlug}/`}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-pill bg-primary hover:bg-ink text-white text-xs font-medium transition-all shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Read Curated Comparative Analysis
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
