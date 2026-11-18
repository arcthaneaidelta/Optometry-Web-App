import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'sand' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium uppercase tracking-wider transition-all duration-200 active:scale-[0.98] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2',
    md: 'text-xs sm:text-[13px] px-6 py-3',
    lg: 'text-sm px-8 py-4',
  };

  const variantStyles = {
    primary: 'bg-forest text-ivory hover:bg-forest-dark focus-visible:ring-forest shadow-sm hover:shadow',
    secondary: 'bg-ivory text-charcoal hover:bg-stone-soft border border-stone-border focus-visible:ring-forest',
    outline: 'border border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-ivory focus-visible:ring-charcoal',
    dark: 'bg-forest-dark text-ivory hover:bg-forest focus-visible:ring-forest-light shadow-sm',
    sand: 'bg-sand text-charcoal hover:bg-sand-light focus-visible:ring-sand',
    ghost: 'text-charcoal hover:text-forest hover:bg-stone-soft/50 focus-visible:ring-forest',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {withArrow && <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </button>
  );
};
