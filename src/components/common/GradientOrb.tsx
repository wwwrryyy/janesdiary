import React from 'react';
import { cn } from '@/lib/utils';

interface GradientOrbProps {
  color?: 'mint' | 'peach' | 'lavender' | 'sky' | 'rose' | 'multi';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const GradientOrb: React.FC<GradientOrbProps> = ({
  color = 'mint',
  size = 'md',
  className,
}) => {
  const sizeMap = {
    sm: 'w-48 h-48 blur-2xl',
    md: 'w-72 h-72 blur-3xl',
    lg: 'w-96 h-96 blur-3xl',
    xl: 'w-[520px] h-[520px] blur-[90px]',
  };

  const colorGradients = {
    mint: 'bg-[radial-gradient(circle,_#a7e5d3_0%,_#a8c8e8_45%,_transparent_75%)]',
    peach: 'bg-[radial-gradient(circle,_#f4c5a8_0%,_#e8b8c4_45%,_transparent_75%)]',
    lavender: 'bg-[radial-gradient(circle,_#c8b8e0_0%,_#a8c8e8_45%,_transparent_75%)]',
    sky: 'bg-[radial-gradient(circle,_#a8c8e8_0%,_#a7e5d3_45%,_transparent_75%)]',
    rose: 'bg-[radial-gradient(circle,_#e8b8c4_0%,_#f4c5a8_45%,_transparent_75%)]',
    multi: 'bg-[radial-gradient(ellipse_at_top,_#a7e5d3_0%,_#f4c5a8_35%,_#c8b8e0_60%,_transparent_80%)]',
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute pointer-events-none rounded-full opacity-45 -z-10 transition-opacity duration-700 select-none mix-blend-multiply',
        sizeMap[size],
        colorGradients[color],
        className
      )}
    />
  );
};
