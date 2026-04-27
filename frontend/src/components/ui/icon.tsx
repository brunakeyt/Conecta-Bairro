import type { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: string;
  filled?: boolean;
}

export function Icon({ icon, filled = false, className = '', ...props }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'font-filled' : ''} ${className}`}
      {...props}
    >
      {icon}
    </span>
  );
}