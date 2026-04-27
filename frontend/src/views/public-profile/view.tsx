import type { PaginatedReviews, ProfessionalProfile } from '../../api/types';
import { PublicNav } from '../../components/features/public-nav';

interface PublicProfileViewProps {
  professional: ProfessionalProfile;
  reviews: PaginatedReviews;
}

export function PublicProfileView({ professional, reviews }: PublicProfileViewProps) {
  const whatsappUrl = `https://wa.me/55${professional.phone?.replace(/\D/g, '')}`;

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <PublicNav />

      <div className="flex-grow pt-20 pb-24">
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          <main className="space-y-8">
            {/* Hero */}
            <section className="bg-primary-fixed rounded-2xl overflow-hidden shadow-sm border border-surface-container-high py-12 px-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative shrink-0">
                  <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                    <img alt={professional.name} className="w-full h-full object-cover" src={professional.avatarUrl} />
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
                    {professional.registrationNumber && (
                      <p className="text-sm text-on-primary-fixed-variant/80 font-medium">Registro: {professional.registrationNumber}</p>
                    )}
                    {professional.address && (
                      <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-on-primary-fixed-variant/90 font-medium">
                        <span className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">location_on</span>
                          {professional.address.street}, {professional.address.number}, {professional.address.district}, {professional.address.city}, {professional.address.state}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Rating + About */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container">
                <h3 className="text-xl font-bold mb-6">Média de Avaliações</h3>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <span className="text-5xl font-extrabold text-on-surface">{professional.rating?.toFixed(1)}</span>
                    <div className="flex text-secondary-container mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                      ))}
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1">{professional.reviewsCount} avaliações</p>
                  </div>
                  <div className="flex-grow space-y-2">
                    {[['5', '90%'], ['4', '7%'], ['3', '3%']].map(([label, w]) => (
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
                  <p className="text-sm mt-2 opacity-90 leading-relaxed">{professional.description}</p>
                </div>
              </div>
            </section>

            {/* Reviews Feed */}
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-surface-container">
              <h2 className="text-2xl font-bold mb-8">O que dizem os clientes</h2>
              {reviews.data.length === 0 ? (
                <p className="text-on-surface-variant text-sm">Nenhuma avaliação ainda.</p>
              ) : (
                <div className="divide-y divide-surface-container-low">
                  {reviews.data.map((review) => (
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
                          {[...Array(review.rating ?? 5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </main>

          <aside>
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-surface-container">
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Informações de Contato</h4>
                  <div className="space-y-4">
                    {/* phone number intentionally not displayed publicly */}
                    {professional.instagram && (
                      <div className="flex items-center gap-3 text-sm font-medium text-on-surface">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                        </div>
                        {professional.instagram}
                      </div>
                    )}
                    {professional.website && (
                      <div className="flex items-center gap-3 text-sm font-medium text-on-surface">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">language</span>
                        </div>
                        {professional.website}
                      </div>
                    )}
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-xl font-headline font-extrabold text-lg flex items-center justify-center gap-2 hover:brightness-95 active:scale-[0.98] transition-all"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Solicitar Orçamento
                </a>
                <p className="text-[11px] text-center text-on-surface-variant leading-tight mt-4">Contato via WhatsApp direto com o profissional.</p>
              </div>

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
                    <p className="text-[10px] text-on-surface-variant">Certidão negativa verificada.</p>
                  </div>
                </div>
              </div>

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

      <footer className="w-full border-t border-slate-200 bg-slate-50">
        <div className="w-full py-12 px-6 flex flex-col items-center gap-4 max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-slate-500 uppercase tracking-widest">
            <a className="hover:text-violet-600 transition-colors" href="#">Termos de Uso</a>
            <a className="hover:text-violet-600 transition-colors" href="#">Privacidade</a>
            <a className="hover:text-violet-600 transition-colors" href="#">Ajuda</a>
          </div>
          <p className="text-xs text-slate-500">© 2026 Conecta Bairro. Conectando Profissionais e Clientes.</p>
        </div>
      </footer>
    </div>
  );
}
