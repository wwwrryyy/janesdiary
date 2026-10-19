import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'mint' | 'peach' | 'lavender' | 'sky' | 'rose';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const baseStyles = 'inline-flex items-center px-2.5 py-1 rounded-pill font-sans text-[11px] font-semibold tracking-badge-upper uppercase leading-none';

  const variantStyles = {
    default: 'bg-surface-strong text-ink border border-hairline/60',
    outline: 'bg-transparent text-ink border border-hairline-strong',
    mint: 'bg-[#a7e5d3]/20 text-[#0c0a09] border border-[#a7e5d3]/40',
    peach: 'bg-[#f4c5a8]/25 text-[#0c0a09] border border-[#f4c5a8]/50',
    lavender: 'bg-[#c8b8e0]/25 text-[#0c0a09] border border-[#c8b8e0]/50',
    sky: 'bg-[#a8c8e8]/25 text-[#0c0a09] border border-[#a8c8e8]/50',
    rose: 'bg-[#e8b8c4]/25 text-[#0c0a09] border border-[#e8b8c4]/50',
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </span>
  );
};
