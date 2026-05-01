import type { PublicProfileViewData } from '../api/types';

const mockProfileData: PublicProfileViewData = {
  professional: {
    id: '1',
    slug: 'ricardo-oliveira',
    name: 'Ricardo Oliveira',
    title: 'Especialista em Reformas & Design de Interiores',
    description: 'Profissional especializado em transformar espaços residenciais e comerciais com foco em funcionalidade e estética contemporânea.',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1fv4XDW-yOTDxcL3rkhxd0H4H3PJubwhssKMfqXqOuRAQZxmWZfL9MN2NrPpiPGeb_wFA9R_2B8IvWHaCL9B0pfHlOc5TiQmrUUSFJoVqizagWlV_8feWVwJpIFuGPUpTGKElD7hwecOvreeX5KS-YbXt7OCizQTedYz4MsRISnkJP5uUANRIaU4UtrU3y0oOxjsp2--PDL-lB9PlaHZCxe0_YX8b5bFRkW7RuNId0OPxgYy7O90DG616tL8GrpXZTnrwt8F1yu0u',
    phone: '(11) 99999-9999',
    email: 'ricardo@exemplo.com',
    instagram: '@ricardo_design',
    website: 'ricardo-portfolio.com',
    registrationNumber: 'CAU-A123456-7',
    address: {
      state: 'SP',
      city: 'São Paulo',
      district: 'Jardins',
      street: 'Rua Oscar Freire',
      number: '1234',
    },
    state: 'SP',
    city: 'São Paulo',
    district: 'Jardins',
    rating: 4.9,
    reviewsCount: 127,
    reviews: [
      {
        id: '1',
        userName: 'Mariana Costa',
        userAvatarUrl: '',
        rating: 5,
        comment: 'O Ricardo superou todas as expectativas. A reforma da minha sala foi feita com extremo cuidado e atenção aos detalhes. Ele realmente entende de estética e funcionalidade.',
        createdAt: '2024-01-15T10:30:00Z',
      },
      {
        id: '2',
        userName: 'Juliano Pereira',
        userAvatarUrl: '',
        rating: 5,
        comment: 'Profissional muito pontual e organizado. O orçamento foi cumprido à risca e o resultado final ficou impecável. Recomendo fortemente para quem busca qualidade.',
        createdAt: '2024-02-20T14:45:00Z',
      },
    ],
    categories: [
      { id: '1', name: 'Reformas', slug: 'reformas', icon: 'home_repair_service' },
      { id: '2', name: 'Design de Interiores', slug: 'design-interiores', icon: 'chair' },
    ],
    verified: true,
    available: true,
    createdAt: '2023-06-10T08:00:00Z',
  },
  reviews: {
    data: [],
    meta: { page: 1, limit: 20, total: 127, totalPages: 7 },
  },
};

export default function PublicProfileView() {
  const { professional } = mockProfileData;

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
        <div className="flex justify-between items-center w-full px-6 py-3 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tighter text-violet-700 font-headline" style={{ fontSize: '24px', letterSpacing: '-0.6px' }}>CONECTA BAIRRO</span>
            <div className="hidden md:flex gap-6">
              <a className="font-headline text-sm font-medium tracking-tight text-slate-600 hover:text-violet-600 transition-colors duration-200" href="#">Encontrar Profissionais</a>
              <a className="font-headline text-sm font-medium tracking-tight text-slate-600 hover:text-violet-600 transition-colors duration-200" href="#">Como Funciona</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="font-headline text-sm font-medium tracking-tight text-slate-600 hover:text-violet-600 px-4 py-2">Entrar</button>
            <button className="bg-primary-container text-white px-6 py-2.5 rounded-xl font-headline text-sm font-semibold hover:scale-95 transition-transform duration-150 shadow-lg shadow-violet-200">
              Sou um profissional
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow pt-20 pb-24">
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* Left column */}
          <main className="space-y-8">
            {/* Hero */}
            <section className="bg-primary-fixed rounded-2xl overflow-hidden shadow-sm border border-surface-container-high py-12 px-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative shrink-0">
                  <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                    <img
                      alt={professional.name}
                      className="w-full h-full object-cover"
                      src={professional.avatarUrl}
                    />
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-3 mb-2">
                    <h1 className="text-4xl font-extrabold tracking-tight text-on-primary-fixed">{professional.name}</h1>
                    {professional.verified && (
                      <span className="bg-on-primary-fixed-variant/10 text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">verified</span>
                        Profissional Verificado
                      </span>
                    )}
                  </div>
                  <p className="text-xl font-semibold text-on-primary-fixed-variant mb-4">{professional.title}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-on-primary-fixed-variant/80 font-medium">Registro Profissional: {professional.registrationNumber}</p>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-on-primary-fixed-variant/90 font-medium">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                        {professional.address.street}, {professional.address.number}, {professional.address.district}, {professional.address.city}, {professional.address.state}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews Summary */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container">
                <h3 className="text-xl font-bold mb-6">Média de Avaliações</h3>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <span className="text-5xl font-extrabold text-on-surface">{professional.rating}</span>
                    <div className="flex text-secondary-container mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-grow space-y-2">
                    {[['5', '92%'], ['4', '6%'], ['3', '2%']].map(([label, w]) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="text-xs font-bold w-4">{label}</span>
                        <div className="flex-grow h-2 bg-surface-container-low rounded-full overflow-hidden">
                          <div className="h-full bg-secondary-container" style={{ width: w }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-primary-container p-8 rounded-2xl flex flex-col justify-between text-white shadow-lg">
                <div className="bg-white/20 self-start p-2 rounded-lg">
                  <span className="material-symbols-outlined text-white text-3xl">info</span>
                </div>
                <div>
                  <p className="text-sm font-medium opacity-80">Sobre o Profissional</p>
                  <p className="text-sm mt-2 opacity-90 leading-relaxed">Profissional especializado em transformar espaços residenciais e comerciais com foco em funcionalidade e estética contemporânea.</p>
                </div>
              </div>
            </section>

            {/* Reviews Feed */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container">
              <h2 className="text-2xl font-bold mb-8">O que dizem os clientes</h2>
              <div className="divide-y divide-surface-container-low">
                {professional.reviews.map((review) => (
                  <div key={review.id} className="py-6 first:pt-0">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-surface-variant">person</span>
                        </div>
                        <div>
                          <p className="font-bold text-sm">{review.userName}</p>
                          <p className="text-xs text-on-surface-variant">Cliente Verificado</p>
                        </div>
                      </div>
                      <div className="flex text-secondary-container">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Right sidebar */}
          <aside>
            <div className="sticky top-24 space-y-6">
              {/* Booking card */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-surface-container">
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Informações de Contato</h4>
                  <div className="space-y-4">
                    {[
                      { icon: 'phone', text: professional.phone },
                      { icon: 'alternate_email', text: professional.instagram },
                      { icon: 'language', text: professional.website },
                    ].map(({ icon, text }) => (
                      <div key={icon} className="flex items-center gap-3 text-sm font-medium text-on-surface">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">{icon}</span>
                        </div>
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-xl font-headline font-extrabold text-lg flex items-center justify-center gap-2 hover:brightness-95 active:scale-[0.98] transition-all">
                  <span className="material-symbols-outlined">chat</span>
                  Solicitar Orçamento
                </button>
                <p className="text-[11px] text-center text-on-surface-variant leading-tight mt-4">As informações de contato completas são liberadas após a contratação.</p>
              </div>

              {/* Trust verifications */}
              <div className="bg-surface-container-low p-6 rounded-2xl space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Verificações de Segurança</h4>
                <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-3 border border-white/60">
                  <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-on-surface">Identidade Confirmada</p>
                    <p className="text-[10px] text-on-surface-variant">Documento validado pela plataforma.</p>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-3 border border-white/60">
                  <span className="material-symbols-outlined text-green-600" style={{ fontVariationSettings: '"FILL" 1' }}>gavel</span>
                  <div className="flex-grow">
                    <p className="text-xs font-bold text-on-surface">Antecedentes Criminais</p>
                    <p className="text-[10px] text-on-surface-variant">Certidão negativa verificada recentemente.</p>
                  </div>
                </div>
              </div>

              {/* Share / Report */}
              <div className="flex justify-between px-2">
                <button className="text-xs font-bold text-on-surface-variant flex items-center gap-1 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[16px]">share</span> Compartilhar
                </button>
                <button className="text-xs font-bold text-on-surface-variant flex items-center gap-1 hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-[16px]">flag</span> Denunciar
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 bg-slate-50">
        <div className="w-full py-12 px-6 flex flex-col items-center gap-4 mt-auto max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-slate-500 uppercase tracking-widest">
            <a className="hover:text-violet-600 transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Termos de Uso</a>
            <a className="hover:text-violet-600 transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Privacidade</a>
            <a className="hover:text-violet-600 transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Ajuda</a>
          </div>
          <p className="text-xs text-slate-500">© 2026 Conecta Bairro. Conectando Profissionais e Clientes.</p>
        </div>
      </footer>
    </div>
  );
}
