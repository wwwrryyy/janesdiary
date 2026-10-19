'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Disc } from 'lucide-react';

interface AudioAmbientPillProps {
  mode?: string;
  trackName?: string;
}

export const AudioAmbientPill: React.FC<AudioAmbientPillProps> = ({
  mode = 'victorian',
  trackName = 'Victorian Rain & Quill Scratches',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  // Initialize Web Audio API generative ambient synthesis
  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 1.2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Generative ambient pink noise buffer
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter settings based on mode
      const filter = ctx.createBiquadFilter();
      if (mode === 'cyber' || mode === 'subaltern') {
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(280, ctx.currentTime);
      } else {
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(540, ctx.currentTime);
        filter.Q.setValueAtTime(1.2, ctx.currentTime);
      }

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();
      noiseSourceRef.current = whiteNoise;

      // Subtle warm sub-bass sine drone
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(mode === 'cyber' ? 65.41 : 110, ctx.currentTime); // C2 or A2
      oscGain.gain.setValueAtTime(0.04, ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      oscRef.current = osc;

      setIsPlaying(true);
    } catch (e) {
      console.error('Web Audio error', e);
    }
  };

  const stopAudio = () => {
    if (audioCtxRef.current && gainNodeRef.current) {
      gainNodeRef.current.gain.linearRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.8);
      setTimeout(() => {
        try {
          audioCtxRef.current?.close();
        } catch {}
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 850);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const toggleMute = () => {
    if (!gainNodeRef.current || !audioCtxRef.current) return;
    if (isMuted) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
      setIsMuted(false);
    } else {
      gainNodeRef.current.gain.setValueAtTime(0, audioCtxRef.current.currentTime);
      setIsMuted(true);
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 floating-pill">
      <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-pill bg-surface-card border border-hairline shadow-elevated hover:border-hairline-strong transition-all">
        {/* Equalizer animation */}
        <div className="flex items-end gap-0.5 h-3.5 w-3.5 shrink-0 px-0.5">
          <span
            className={`w-1 bg-ink rounded-full transition-all duration-300 ${
              isPlaying && !isMuted ? 'h-3 animate-pulse' : 'h-1'
            }`}
          />
          <span
            className={`w-1 bg-[#a7e5d3] rounded-full transition-all duration-300 ${
              isPlaying && !isMuted ? 'h-3.5 animate-bounce' : 'h-1.5'
            }`}
          />
          <span
            className={`w-1 bg-ink rounded-full transition-all duration-300 ${
              isPlaying && !isMuted ? 'h-2 animate-pulse' : 'h-1'
            }`}
          />
        </div>

        {/* Track Label */}
        <div className="hidden sm:block text-left max-w-[170px] truncate">
          <p className="font-sans text-[11px] font-medium text-ink truncate leading-tight">
            {trackName}
          </p>
          <p className="font-mono text-[9px] text-muted uppercase">
            Web Audio Ambient
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={togglePlay}
            className="w-7 h-7 rounded-full bg-primary hover:bg-ink text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm"
            aria-label={isPlaying ? 'Pause ambient audio' : 'Play ambient audio'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          {isPlaying && (
            <button
              onClick={toggleMute}
              className="p-1 rounded-full text-muted hover:text-ink transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
