import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className = '', children, ...props }: CardProps) {
  return (
    <div className={`bg-surface-container-lowest rounded-2xl p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

Card.Header = ({ className = '', children, ...props }: CardProps) => {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Body = ({ className = '', children, ...props }: CardProps) => {
  return (
    <div className={`space-y-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Footer = ({ className = '', children, ...props }: CardProps) => {
  return (
    <div className={`mt-4 pt-4 border-t border-outline/20 ${className}`} {...props}>
      {children}
    </div>
  );
};