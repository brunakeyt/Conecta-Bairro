import { UserDropdown } from './user-dropdown';

interface DashboardAppBarProps {
  navLinks?: Array<{ label: string; href: string }>;
}

const defaultNav: Array<{ label: string; href: string }> = [
  // { label: 'Dashboard', href: '#' },
  // { label: 'Marketplace', href: '#' },
  // { label: ima'Messages', href: '#' },
  // { label: 'Calendar', href: '#' },
];

export function DashboardAppBar({ navLinks = defaultNav }: DashboardAppBarProps) {
  return (
    <header className="fixed top-0 w-full z-50 h-20 glass-header shadow-[0_12px_32px_rgba(25,28,29,0.06)]">
      <div className="flex justify-between items-center px-8 max-w-[1440px] mx-auto w-full h-full">
        <div className="flex items-center gap-8">
          <DashboardAppBar.Logo />
          <nav className="hidden md:flex gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                className="text-slate-500 hover:text-violet-600 font-medium transition-all duration-300"
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* <button className="p-2 text-on-surface-variant hover:bg-slate-100/50 rounded-full transition-all">
            <span className="material-symbols-outlined">notifications</span>
          </button> */}
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}

DashboardAppBar.Logo = () => (
  <span
    className="text-xl font-bold tracking-tighter text-violet-700 font-headline"
    style={{ fontSize: '24px', letterSpacing: '-0.6px' }}
  >
    CONECTA BAIRRO
  </span>
);

