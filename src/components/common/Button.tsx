import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-colors duration-150 rounded-pill focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ink/20 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-active active:bg-ink shadow-sm',
    outline: 'bg-transparent text-ink border border-hairline-strong hover:bg-surface-strong/60',
    secondary: 'bg-surface-strong text-ink hover:bg-hairline',
    ghost: 'bg-transparent text-body hover:text-ink hover:bg-surface-strong/40',
  };

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
    md: 'text-[15px] px-5 py-2.5 h-10 gap-2 leading-none',
    lg: 'text-base px-6 py-3 h-12 gap-2.5',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
