import { type ReactNode, type InputHTMLAttributes } from 'react';

export const FormField = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

FormField.Label = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <label className={`block text-xs font-medium uppercase tracking-widest text-on-surface-variant mb-2 ${className}`}>
      {children}
    </label>
  );
};

FormField.Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="w-full bg-surface-container-lowest rounded-xl px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
      {...props}
    />
  );
};

FormField.Hint = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return <p className={`text-xs text-on-surface-variant mt-2 ${className}`}>{children}</p>;
};