'use client';

import React, { useState } from 'react';
import { RadarScores } from '@/lib/mdx';
import { Activity } from 'lucide-react';

interface LiteraryRadarProps {
  scores: RadarScores;
}

export const LiteraryRadar: React.FC<LiteraryRadarProps> = ({ scores }) => {
  const [hoveredAxis, setHoveredAxis] = useState<string | null>(null);

  const axes = [
    { key: 'agency', label: 'Female Agency', score: scores.agency, desc: 'Protagonist capacity for sovereign action against patriarchal coercion.' },
    { key: 'intersectionality', label: 'Intersectional Depth', score: scores.intersectionality, desc: 'Synthesis of race, caste, class, and colonial power structures.' },
    { key: 'subversion', label: 'Subversion of Tropes', score: scores.subversion, desc: 'Dismantling of classical patriarchal archetypes & domestic scripts.' },
    { key: 'historicalImpact', label: 'Historical Impact', score: scores.historicalImpact, desc: 'Enduring influence on feminist critical theory and canon revision.' },
    { key: 'structuralInnovation', label: 'Structural Innovation', score: scores.structuralInnovation, desc: 'Formal linguistic experimentation, polyphony, and narrative rupture.' },
  ];

  const size = 300;
  const center = size / 2;
  const maxRadius = size * 0.38;
  const numAxes = axes.length;

  // Polar coordinate helper
  const getCoordinates = (index: number, score: number) => {
    const angle = (2 * Math.PI * index) / numAxes - Math.PI / 2;
    const r = (score / 10) * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Generate polygon points string
  const polygonPoints = axes
    .map((axis, i) => {
      const { x, y } = getCoordinates(i, axis.score);
      return `${x},${y}`;
    })
    .join(' ');

  // Concentric background grid polygons (levels 2, 4, 6, 8, 10)
  const gridLevels = [2, 4, 6, 8, 10];

  return (
    <div className="p-5 rounded-2xl border border-hairline bg-surface-card shadow-soft">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-muted" />
          <h3 className="font-serif text-base font-light text-ink">
            The Literary Radar
          </h3>
        </div>
        <span className="font-mono text-[10px] text-muted uppercase">
          5-Axis Formal Analysis
        </span>
      </div>

      <div className="relative flex justify-center items-center py-2">
        <svg width={size} height={size} className="overflow-visible select-none">
          {/* Concentric Grid Pentagons */}
          {gridLevels.map((level) => {
            const points = axes
              .map((_, i) => {
                const { x, y } = getCoordinates(i, level);
                return `${x},${y}`;
              })
              .join(' ');
            return (
              <polygon
                key={level}
                points={points}
                fill="none"
                stroke="#e7e5e4"
                strokeWidth={level === 10 ? '1.5' : '1'}
                strokeDasharray={level === 10 ? 'none' : '2 2'}
              />
            );
          })}

          {/* Axis Spokes */}
          {axes.map((_, i) => {
            const { x, y } = getCoordinates(i, 10);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#e7e5e4"
                strokeWidth="1"
              />
            );
          })}

          {/* Filled Data Polygon */}
          <polygon
            points={polygonPoints}
            fill="rgba(167, 229, 211, 0.35)"
            stroke="#0c0a09"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Vertex Nodes & Hover Circles */}
          {axes.map((axis, i) => {
            const { x, y } = getCoordinates(i, axis.score);
            const isHovered = hoveredAxis === axis.key;
            return (
              <g key={axis.key}>
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 5 : 3.5}
                  fill="#0c0a09"
                  className="transition-all cursor-pointer"
                  onMouseEnter={() => setHoveredAxis(axis.key)}
                  onMouseLeave={() => setHoveredAxis(null)}
                />
              </g>
            );
          })}

          {/* Labels positioned around perimeter */}
          {axes.map((axis, i) => {
            const angle = (2 * Math.PI * i) / numAxes - Math.PI / 2;
            const labelRadius = maxRadius + 22;
            const lx = center + labelRadius * Math.cos(angle);
            const ly = center + labelRadius * Math.sin(angle);
            const isHovered = hoveredAxis === axis.key;

            return (
              <text
                key={axis.key}
                x={lx}
                y={ly}
                textAnchor={Math.abs(Math.cos(angle)) < 0.2 ? 'middle' : Math.cos(angle) > 0 ? 'start' : 'end'}
                alignmentBaseline="middle"
                className={`font-sans text-[10px] cursor-pointer transition-colors ${
                  isHovered ? 'fill-ink font-semibold' : 'fill-muted font-normal'
                }`}
                onMouseEnter={() => setHoveredAxis(axis.key)}
                onMouseLeave={() => setHoveredAxis(null)}
              >
                {axis.label} ({axis.score})
              </text>
            );
          })}
        </svg>
      </div>

      {/* Hover Information Callout */}
      <div className="mt-2 p-2.5 rounded-lg bg-canvas-soft border border-hairline min-h-[44px] flex items-center">
        {hoveredAxis ? (
          <div>
            <span className="font-sans font-medium text-xs text-ink">
              {axes.find((a) => a.key === hoveredAxis)?.label}:{' '}
              <span className="font-mono font-semibold">{axes.find((a) => a.key === hoveredAxis)?.score}/10</span>
            </span>
            <p className="text-[11px] text-muted leading-tight mt-0.5">
              {axes.find((a) => a.key === hoveredAxis)?.desc}
            </p>
          </div>
        ) : (
          <p className="text-[11px] text-muted text-center w-full">
            Hover any vertex to view dimension criteria and qualitative score justification.
          </p>
        )}
      </div>
    </div>
  );
};
