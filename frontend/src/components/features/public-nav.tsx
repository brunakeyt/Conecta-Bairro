import type { HTMLAttributes } from 'react';
import { useAuth } from '../../auth/use-auth';
import { UserDropdown } from './user-dropdown';

interface PublicNavProps extends HTMLAttributes<HTMLDivElement> {}

export function PublicNav({ className = '', ...props }: PublicNavProps) {
  const { identity } = useAuth();
  const isLoggedIn = !!identity.userId;

  return (
    <header className={`fixed top-0 w-full z-50 glass-nav shadow-[0_12px_32px_rgba(25,28,29,0.06)] h-20 ${className}`} {...props}>
      <div className="flex justify-between items-center w-full px-8 h-full max-w-[1920px] mx-auto">
        <a href="/" className="text-2xl font-bold tracking-tight text-violet-700 font-headline">
          CONECTA BAIRRO
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-violet-700 border-b-2 border-violet-600 font-headline font-semibold py-1" href="/explore">
            Encontre profissionais
          </a>
          <a className="text-slate-600 font-headline font-semibold hover:text-violet-600 transition-colors" href="/#how-it-works">
            Como funciona
          </a>
        </nav>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <UserDropdown />
          ) : (
            <a className="text-slate-600 font-semibold px-4 py-2 hover:text-violet-600 transition-colors" href="/login">
              Entrar
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

PublicNav.Logo = ({ className = '' }: { className?: string }) => (
  <a href="/" className={`text-2xl font-bold tracking-tight text-violet-700 font-headline ${className}`}>
    CONECTA BAIRRO
  </a>
);

PublicNav.Links = () => (
  <nav className="hidden md:flex items-center gap-8">
    <a className="text-violet-700 border-b-2 border-violet-600 font-headline font-semibold py-1" href="/explore">
      Encontre profissionais
    </a>
    <a className="text-slate-600 font-headline font-semibold hover:text-violet-600 transition-colors" href="/#how-it-works">
      Como funciona
    </a>
    {/* <a className="text-slate-600 font-headline font-semibold hover:text-violet-600 transition-colors" href="#">
      Quem somos
    </a> */}
  </nav>
);

PublicNav.Actions = () => (
  <div className="flex items-center gap-4">
    {/* <a className="text-slate-600 font-semibold px-4 py-2 hover:text-violet-600 transition-colors" href="#">
      Entrar
    </a> */}
    {/* <a className="bg-primary-container text-white px-6 py-2.5 rounded-xl font-semibold shadow-md hover:scale-[0.98] transition-transform duration-200" href="#">
      Sou um profissional
    </a> */}
  </div>
);
