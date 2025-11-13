import React from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  hover = false,
  padding = 'lg',
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'card',
        hover && 'card-hover',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
