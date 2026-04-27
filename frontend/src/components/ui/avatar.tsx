import type { ImgHTMLAttributes, ReactNode } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Avatar({ size = 'md', className = '', src, alt, ...props }: AvatarProps) {
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizeStyles[size]} ${className}`}
      {...props}
    />
  );
}

interface AvatarStackProps {
  children: ReactNode;
  max?: number;
  className?: string;
}

export function AvatarStack({ children, max = 4, className = '' }: AvatarStackProps) {
  const childArray = Array.isArray(children) ? children : [children];
  const visible = childArray.slice(0, max);
  const remaining = childArray.length - max;

  return (
    <div className={`flex -space-x-3 ${className}`}>
      {visible.map((child, i) => (
        <div key={i} className="ring-2 ring-white rounded-full">{child}</div>
      ))}
      {remaining > 0 && (
        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center ring-2 ring-white">
          <span className="text-xs font-medium text-on-surface">+{remaining}</span>
        </div>
      )}
    </div>
  );
}