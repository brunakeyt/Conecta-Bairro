import type { ChangeEvent, ReactNode } from 'react';

interface FilterSidebarProps {
  title?: string;
  children: ReactNode;
}

export function FilterSidebar({ title = 'Filtros', children }: FilterSidebarProps) {
  return (
    <aside
      className="w-[300px] h-[calc(100vh-80px)] fixed left-0 overflow-y-auto border-r border-slate-200/50 bg-white p-8"
      style={{ scrollbarWidth: 'none' }}
    >
      <h2 className="font-headline font-bold text-lg mb-8 tracking-tight">{title}</h2>
      {children}
    </aside>
  );
}

FilterSidebar.Group = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="mb-8">
    <button className="flex items-center justify-between w-full mb-4 group">
      <span className="text-sm font-semibold text-on-surface">{label}</span>
    </button>
    {children}
  </div>
);

FilterSidebar.CheckboxItem = ({
  label,
  checked,
  defaultChecked,
  onChange,
}: {
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <input
      {...(checked !== undefined ? { checked } : { defaultChecked })}
      onChange={(e) => onChange?.(e.target.checked)}
      className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20"
      type="checkbox"
    />
    <span className="text-sm text-on-surface-variant group-hover:text-on-surface">{label}</span>
  </label>
);

FilterSidebar.CheckboxWithIcon = ({
  label,
  icon,
  checked,
  defaultChecked,
  onChange,
}: {
  label: string;
  icon: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <input
      {...(checked !== undefined ? { checked } : { defaultChecked })}
      onChange={(e) => onChange?.(e.target.checked)}
      className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20"
      type="checkbox"
    />
    <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>{icon}</span>
      <span className="text-sm text-on-surface-variant group-hover:text-on-surface">{label}</span>
    </div>
  </label>
);

FilterSidebar.SelectInput = ({
  children,
  value,
  defaultValue,
  onChange,
}: {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <div className="relative">
    <select
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-4 pr-10 text-sm focus:ring-2 focus:ring-primary/20 cursor-pointer"
    >
      {children}
    </select>
  </div>
);

FilterSidebar.TextInput = ({
  placeholder,
  value,
  defaultValue,
  onChange,
}: {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    {...(value !== undefined ? { value } : { defaultValue })}
    onChange={onChange}
    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary/20"
    placeholder={placeholder}
    type="text"
  />
);
