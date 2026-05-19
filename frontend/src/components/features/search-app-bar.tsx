import { UserDropdown } from './user-dropdown';

interface SearchAppBarProps {
  onSearch?: (value: string) => void;
  searchValue?: string;
}

export function SearchAppBar({ onSearch, searchValue }: SearchAppBarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-white/70 backdrop-blur-md border-b border-slate-200/50">
      <div className="flex items-center gap-12">
        <div className="flex-shrink-0">
          <SearchAppBar.Logo />
        </div>
        <SearchAppBar.Search defaultValue={searchValue} onChange={onSearch} />
      </div>
      <div className="flex items-center gap-1">
        <SearchAppBar.IconButton icon="notifications" />
        <SearchAppBar.IconButton icon="mail" />
        <UserDropdown />
      </div>
    </header>
  );
}

SearchAppBar.Logo = () => (
  <a
    href="/"
    className="text-xl font-bold text-violet-700 font-headline tracking-tight"
    style={{ fontSize: '24px', letterSpacing: '-0.6px' }}
  >
    CONECTA BAIRRO
  </a>
);

SearchAppBar.Search = ({
  placeholder = 'Buscar profissionais...',
  defaultValue = '',
  onChange,
}: {
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}) => (
  <div className="relative w-[400px]">
    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
    <input
      className="w-full pl-10 pr-4 py-2.5 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-primary/40 text-sm"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(e) => onChange?.(e.target.value)}
      type="text"
    />
  </div>
);

SearchAppBar.IconButton = ({ icon, badge = false }: { icon: string; badge?: boolean }) => (
<>
  {/* <button className="hover:bg-slate-100 rounded-full p-2 transition-colors relative">
    <span className="material-symbols-outlined text-slate-500">{icon}</span>
    {badge && <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />}
  </button> */}
  </>
);
