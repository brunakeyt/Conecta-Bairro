import type { ReactNode } from 'react';

interface PageShellProps {
  nav: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  /** Extra padding-top beyond the fixed nav clearance (pt-20). Default: none. */
  extraTopPadding?: string;
  className?: string;
}

export function PageShell({
  nav,
  children,
  footer,
  extraTopPadding = '',
  className = '',
}: PageShellProps) {
  return (
    <div className={`min-h-screen flex flex-col bg-surface text-on-surface ${className}`}>
      {nav}
      <div className={`flex-grow pt-20 ${extraTopPadding}`}>
        {children}
      </div>
      {footer}
    </div>
  );
}
