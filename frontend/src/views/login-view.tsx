import { useState } from 'react';

interface LoginViewProps {
  loading?: boolean;
  onSignIn: (role: 'client' | 'professional') => void;
}

export default function LoginView({ loading = false, onSignIn }: LoginViewProps) {
  const [role, setRole] = useState<'client' | 'professional'>('client');

  return (
    <main className="flex min-h-screen w-full overflow-hidden">
      {/* Left column — visual hero */}
      <section className="hidden lg:flex lg:w-1/2 relative bg-primary-container items-center justify-center p-12">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA86yd1kTniB3cempuB1hTb49q7mWi-5FB1XF5mt_vgac1rxi9anUfph-72ZYFYWUGP_uQyZbfBeLJsHcXS8_Px9igiiajsU3f11a3VqFy4t2zeMlvV7ox64oJ1vLTINgQ8EnQ-0nfw3Wge9TR-ahTURMwFnl7wEdskINNSZD6HY5LLzn_CMnPSgtEtFrwThY7ju-ozkaPY3NNzZk_dLJa0F3rR4rdp-dByrK6lihrE8WClRr3avLJnMaQh7C36ATWB1Jd4Dpfn2PR"
            alt=""
          />
        </div>
        <div className="relative z-10 max-w-lg text-white">
          <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="material-symbols-outlined mr-2 text-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
            <span className="text-sm font-medium tracking-wide">Membros Selecionados</span>
          </div>
          <h2 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
            A casa dos <span className="text-secondary-container">melhores</span> profissionais.
          </h2>
          <p className="text-xl text-on-primary-container/90 leading-relaxed mb-8">
            Conectamos visões ambiciosas aos especialistas que as tornam realidade. Entre para a Guild &amp; Gentry.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              <img
                className="h-10 w-10 rounded-full border-2 border-primary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJLYyzZHb-T2pyEXIjSI_AmHs3gcCQ8vDMqt0AkBrny9n3z-2qSj5YmgjBFNtxiPiI44pe5L9yf3F8mxIwfkF-j8xRdRAb9bA3Ka2dV6l2eayIa352LoZCUC4H46kUXfGlN4i31bJo1zar7yXOXstPClEuL20MsBRmg-E6IThWN64RoW1NEOyGk5WRCA32Ufi6nVOGF1zTLVQSHXXzQfi4NUJGRXg9wv0iQRfqhnKfCyLNdDpwt9bXziSOXcvEOpwn_z8PisoQ5OCY"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-primary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa5GQUgaGfllcC6cvp4iXFiFTkI6uRky0Cnb324WtTDrIrqsud-CL66LQ6zo-oOx6Vu6opyudSirvjmoX0whekTYKsYfwzIovXTJw_NMrbYRFktSIUkY_zPiFJlDc30LORJryiaGrauKtybI74sNKm1t2YVaC5pKuRx3eSjK5OVyiIGIuwkHTp28YVgEpn4tERTIUIkMqj8CYolhg1Zvflur4GnbKs_xxuOaA5aOq7AJkUC6TD2tikK28pXrkq-ekrzntbvikWpDD4"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full border-2 border-primary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4fY7y2LiwTNhYX9l9cnMnX0UwR71Ik8ReUJGuKVmoj737q3WX9BGVmM7Orj6__Jt7aucUKh68BIQLqHwAMRmheXD1AJEW9Auw1SaZxAoCYp4eHnOLA9HaUPfp30_goBFRBsZcB-YdUyuXGV8otU8SGyrJhSx36_gm0rJmUdbsND1GAEbJ0fReHNn2nsBEEwQCwh-6xAzYHRly4GLcv7Tme9YfF1Gmm64GXFlnxAtJ73JL-tB2VH720EyNnqttnRgBFNqqZTJm9oKu"
                alt=""
              />
            </div>
            <span className="text-sm font-medium text-white/80">+2,400 Especialistas ativos hoje</span>
          </div>
        </div>
      </section>

      {/* Right column — login form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-surface-container-lowest">
        <div className="w-full max-w-md">
          {/* Logo + welcome */}
          <div className="mb-10">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>architecture</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary">CONECTA BAIRRO</span>
            </div>
            <h1 className="text-3xl font-bold text-on-surface mb-2">Bem-vindo de volta</h1>
            <p className="text-on-surface-variant">Gerencie seus projetos e conexões em um só lugar.</p>
          </div>

          {/* Segmented toggle */}
          {/* <div className="p-1 mb-8 bg-surface-container-low rounded-xl flex justify-center">
            <button
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all w-full ${role === 'client' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              type="button"
              onClick={() => setRole('client')}
            >
              Sou Cliente
            </button>
            <button
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all w-full ${role === 'professional' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
              type="button"
              onClick={() => setRole('professional')}
            >
              Sou Profissional
            </button>
          </div> */}

          {/* Google sign-in */}
          <div className="gap-4 mb-8 flex justify-center">
            <button
              className="flex items-center justify-center px-6 py-4 border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-all hover:scale-[1.02] active:scale-[0.98] w-full shadow-sm disabled:opacity-50 disabled:pointer-events-none"
              type="button"
              disabled={loading}
              onClick={() => onSignIn(role)}
            >
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-base font-bold text-on-surface">
                {loading ? 'Entrando...' : 'Continuar com Google'}
              </span>
            </button>
          </div>

          {/* Footer links */}
          {/* <div className="mt-10 text-center">
            <p className="text-on-surface-variant font-medium">
              Ainda não tem conta?{' '}
              <a className="text-primary font-bold hover:underline decoration-2 underline-offset-4 transition-all" href="#">Cadastre-se</a>
            </p>
          </div> */}
          <footer className="mt-12 pt-8 border-t border-outline-variant/20 flex flex-wrap justify-center gap-4 text-xs text-on-surface-variant/70">
            <a className="hover:text-on-surface transition-colors" href="#">Política de Privacidade</a>
            <span className="text-outline-variant/30">•</span>
            <a className="hover:text-on-surface transition-colors" href="#">Termos de Serviço</a>
            <span className="text-outline-variant/30">•</span>
            <a className="hover:text-on-surf  ace transition-colors" href="#">Ajuda</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
