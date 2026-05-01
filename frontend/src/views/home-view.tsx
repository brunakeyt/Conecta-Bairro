import { PublicNav } from '../components/features/public-nav';
import { FeaturedProCard } from '../components/features/featured-pro-card';
import type { HomeViewData } from '../api/types';

const mockData: HomeViewData = {
  categories: [
    { id: '1', name: 'Reformas', slug: 'reformas', icon: 'home_repair_service' },
    { id: '2', name: 'Aulas', slug: 'aulas', icon: 'school' },
    { id: '3', name: 'Beleza', slug: 'beleza', icon: 'content_cut' },
    { id: '4', name: 'Tecnologia', slug: 'tecnologia', icon: 'terminal' },
    { id: '5', name: 'Eventos', slug: 'eventos', icon: 'event' },
    { id: '6', name: 'Serviços Gerais', slug: 'servicos-gerais', icon: 'cleaning_services' },
  ],
  featuredProfessionals: [
    {
      id: '1',
      slug: 'marcos-silva',
      name: 'Marcos Silva',
      title: 'Arquiteto e Reformas',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNGiNZL5efaj-GA8r0fGhAJBVCttGaAwP2iiEPCP1xxtJb_1vhZqzspNNQ8bcTHefsvAmVpMn-Pi3JedVY23QE_sAPqel3DwjiOLo5hUuxigDLh_49EiUouOu0Sr8lBuUolYCbbTQRmqKXSg_1gnXL_TYusjMi3CR_fVtwXlD3VP8stLKEySU96BLDAf3R61tZ7Yd36edRis3mp9NL3CH5sr7YUF61hfzMaiX5nIu18dHPzMx3NXSbfCHJG_hdCy-4c4nfnXRJOaR4',
      state: 'SP',
      city: 'São Paulo',
      rating: 4.9,
      reviewsCount: 127,
      categories: ['reformas', 'design'],
    },
    {
      id: '2',
      slug: 'ana-beatriz',
      name: 'Ana Beatriz',
      title: 'Desenvolvedora Web Fullstack',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgPj8VcDkGfjHnmEsBHdhTSPUgkwuS7OgIcroQ0IXKICWx2apzTWWF4mEQkzSAiPeH1qKfLj2lafYs4ZAv9hR2oRwbl3g491VnMXRNUrG4AH2M5JXggtHdkBZKhO6j2A4Ebft3pzPVHM7E491HbrNRWvp9hkO3ZQfCddWliFL42w_BKPt-8D-pY062uF9vuw2MSpPAdHAUPmch5y1Nb8cf03vbOEdHpWnIvZ1BR61UM0WpKyftLpt2_-b7x8B8raxx9r-_H2OOcmBi',
      state: 'PR',
      city: 'Curitiba',
      rating: 5.0,
      reviewsCount: 89,
      categories: ['tecnologia'],
    },
    {
      id: '3',
      slug: 'carla-mendes',
      name: 'Carla Mendes',
      title: 'Fotógrafa de Eventos',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO_s_WfeW3g6jir9m9JEVSaM2_lhsllSObE21OB3ynxlW3lhFKrydpEwmSSswuMwAfLI3_UDChzRxOPbyxGn60vLPGLflBFWFNDN2a-3k2qZDu57lTW-PWSn8oROUjYymQhNWJ9ci0oC4OnOuUqbebY8Sxnj_BgHSmOYEH-vBz5L4FPYoAA0SclyNaH6RvmVwfdqt617fRpi6NUa2jG6qxqVLaeqSpPyB7E8RURzyHJcwZRu80Q5fe_orgasnOMKXxoKStZT5ctP56',
      state: 'RJ',
      city: 'Rio de Janeiro',
      rating: 4.8,
      reviewsCount: 203,
      categories: ['eventos'],
    },
  ],
};

export default function HomeView() {
  const { categories, featuredProfessionals } = mockData;

  return (
    <>
      <PublicNav />
      <main className="pt-20">
        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-[1.1] mb-6 tracking-tight">
                Conecte-se com a <span className="text-primary">Elite</span> dos Profissionais.
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                De reformas residenciais a consultoria de TI, encontre especialistas selecionados para transformar seus projetos em realidade.
              </p>
              <div className="bg-surface-container-lowest p-2 rounded-2xl shadow-[0_12px_32px_rgba(25,28,29,0.06)] flex flex-col md:flex-row gap-2 max-w-2xl">
                <div className="flex-1 flex items-center px-4 gap-3 bg-surface-container-low rounded-xl py-3 focus-within:ring-2 ring-primary/20 transition-all">
                  <span className="material-symbols-outlined text-outline">search</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline font-medium" placeholder="Qual categoria?" type="text" />
                </div>
                <div className="flex-1 flex items-center px-4 gap-3 bg-surface-container-low rounded-xl py-3 focus-within:ring-2 ring-primary/20 transition-all">
                  <span className="material-symbols-outlined text-outline">location_on</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline font-medium" placeholder="Sua localizaçÃ£o" type="text" />
                </div>
                <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold text-lg hover:scale-[0.98] transition-transform">
                  Buscar
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  alt="Professional working"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOLBqhv9spg98nl0_hugVlS8I7Z4vGuW9HUrXDdFRU9Z_cmk6mUzCDxjz3GsKHg91a9u9E9G9K6bZXe-5hBZzXJBwBLTRICcLBcysE-mISiGIaO0DX6a3SyEjx4TRT6wIkIlzb53_jhbyzJE5eaYZlkRimOneLB_VL95X88EMKMcGo5n8jJ-E2_OqTchjnsX0P5GIjKdEXD29GA6lJq1U9pKZEUEAfzOSutJSdZI99DLWQS2TjUIgP7kmhd2kmXajb1I0KeP26Fj7q"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-tertiary-container/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Profissionais confiÃ¡veis</p>
                  <p className="text-xs text-on-surface-variant">Próximos de vocÃª</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-bold tracking-widest text-xs uppercase">Explorar</span>
                <h2 className="font-headline text-4xl font-bold mt-2">Categorias Populares</h2>
              </div>
              <button className="text-primary font-semibold flex items-center gap-2 hover:underline">
                Ver tudo <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {categories.map((cat) => (
                <div key={cat.id} className="group bg-surface-container-low p-8 rounded-3xl text-center hover:bg-primary-container transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-surface-container-lowest rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-primary">{cat.icon}</span>
                  </div>
                  <span className="font-bold group-hover:text-white transition-colors">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works â€” dual path */}
        <section className="py-24 space-y-32" id="how-it-works">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-4">Como Funciona</h2>
            <p className="text-on-surface-variant text-lg">Dois caminhos, um destino: excelÃªncia profissional.</p>
          </div>

          {/* Clients path */}
          <div className="bg-primary-fixed/20 py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[40rem] rotate-12">person_search</span>
            </div>
            <div className="max-w-7xl mx-auto px-8">
              <div className="mb-20">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">PARA QUEM PRECISA</span>
                <h3 className="font-headline text-6xl font-extrabold mt-4 text-on-surface">Para Clientes</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { n: '1', title: 'Busque um profissional', desc: 'Encontre o que vocÃª precisa. Ã‰ rÃ¡pido e gratuito!' },
                  { n: '2', title: 'Escolha o perfil que mais te agrada', desc: 'Compare perfis e avaliaçÃµes e feche o negócio com segurança.' },
                  { n: '3', title: 'Entre em contato', desc: 'Feche o negócio com segurança.' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="group">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-8 group-hover:scale-110 transition-transform">{n}</div>
                    <h4 className="text-2xl font-bold mb-4">{title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-20 flex justify-start">
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-3 hover:gap-5 transition-all">
                  Encontre jÃ¡ <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Professionals path */}
          <div className="bg-secondary-fixed/20 py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[40rem] -rotate-12">history_edu</span>
            </div>
            <div className="max-w-7xl mx-auto px-8">
              <div className="mb-20 md:text-right">
                <span className="text-secondary font-bold tracking-widest text-sm uppercase">PARA QUEM FAZ</span>
                <h3 className="font-headline text-6xl font-extrabold mt-4 text-on-surface">Para Profissionais</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { n: '1', title: 'Se cadastre na plataforma', desc: 'Crie sua conta e senha.' },
                  { n: '2', title: 'Crie seu Perfil', desc: 'Adicione suas informaçÃµes para contato e categorias de trabalho.' },
                  { n: '3', title: 'Aguarde orçamentos direto no Whatsapp', desc: 'Os clientes chegarÃ£o em vocÃª diretamente.' },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="group">
                    <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center text-2xl font-bold mb-8 group-hover:scale-110 transition-transform">{n}</div>
                    <h4 className="text-2xl font-bold mb-4">{title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-20 flex md:justify-end">
                <button className="px-8 py-4 bg-secondary-container text-on-secondary-container rounded-xl font-bold flex items-center gap-3 hover:gap-5 transition-all">
                  Quero me Juntar <span className="material-symbols-outlined">edit_square</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Professionals */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline text-4xl font-bold mb-12">Profissionais em Destaque</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProfessionals.map((pro) => (
                <FeaturedProCard key={pro.id} professional={pro} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Bento */}
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline text-4xl font-bold text-center mb-16">O que dizem sobre nós</h2>
            <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
              <div className="md:col-span-2 md:row-span-1 bg-primary text-white p-12 rounded-[2rem] flex flex-col justify-center">
                <span className="material-symbols-outlined text-4xl mb-6 opacity-50">format_quote</span>
                <p className="text-2xl font-headline font-semibold mb-8">"Encontrei um profissional de TI em menos de 10 minutos. O projeto foi entregue antes do prazo e com qualidade excepcional."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container" />
                  <div>
                    <p className="font-bold">Ricardo Oliveira</p>
                    <p className="text-sm opacity-70">AvaliaçÃ£o para: Ana Beatriz</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 md:row-span-2 bg-secondary-container p-12 rounded-[2rem] flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-4xl mb-6 text-on-secondary-container opacity-50">format_quote</span>
                  <p className="text-xl font-bold text-on-secondary-container">"Como profissional, o Editorial Marketplace mudou minha carreira. Agora tenho fluxo constante de clientes qualificados que valorizam meu trabalho."</p>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-on-secondary-container/20" />
                  <div>
                    <p className="font-bold text-on-secondary-container">Juliana Costa</p>
                    <p className="text-sm text-on-secondary-container opacity-70">AvaliaçÃ£o para: Marcos Silva</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 md:row-span-1 bg-surface-container-lowest p-12 rounded-[2rem] border border-outline-variant/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant font-medium">"Interface incrÃ­vel e muito fÃ¡cil de usar. Os filtros de localizaçÃ£o funcionam perfeitamente."</p>
                <p className="mt-4 font-bold">- FabrÃ­cio L. (via Carla Mendes)</p>
              </div>
              <div className="md:col-span-1 md:row-span-1 bg-surface-container-lowest p-12 rounded-[2rem] border border-outline-variant/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant font-medium">"Segurança em primeiro lugar. O sistema de pagamentos Ã© transparente e confiÃ¡vel."</p>
                <p className="mt-4 font-bold">- Maria Eduarda (via Ana Beatriz)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Pro Banner */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-inverse-surface rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="relative z-10 w-full md:w-3/5">
                <h2 className="text-white font-headline text-4xl md:text-5xl font-bold mb-6">Pronto para elevar seu negócio ao próximo nÃ­vel?</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-lg">Junte-se a milhares de profissionais que encontraram o sucesso na nossa plataforma. Cadastro simples, sem taxas escondidas.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold text-lg hover:scale-[0.98] transition-transform">Seja um Profissional</button>
                  <button className="border border-slate-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-colors">Saiba mais</button>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden md:block">
                <img
                  alt="Collaboration"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsZZ-Xa9yc-rgDUBNGMmJPPP1-EyL0HQXSftUebCEMa6G-kQ8k73fxIMww9Sm8secmk9PegeVII88gNDj0sFVmgfGtoHNJ5ASwEvLqxKWVPuKLZ53gFud4J2Z1QYN0zi9s2HbdmEZr1iBO-L0WIT931kZJDLQfFxscrUOkKK1Z5WGaMdCqPLLA_KQkPuYjFV6HlLBJXms5if2V4oOWSCbMitwFrPnZvHf0oVRNm2xA9mkoTQDV5cJMiiK8XhtUtRbAKfOOgltmSYS4"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full mt-auto py-12 bg-slate-50 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
          <div className="col-span-1">
            <div className="font-headline font-bold text-violet-700 text-xl mb-6">CONECTA BAIRRO</div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">A plataforma definitiva para conectar talentos excepcionais a projetos visionÃ¡rios.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors" href="#">
                <span className="material-symbols-outlined text-xl">thumb_up</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              {['Como Funciona', 'Categorias', 'Seja um Profissional', 'Segurança'].map((item) => (
                <li key={item}><a className="hover:text-violet-600 hover:underline transition-all" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              {['Sobre Nós', 'Carreiras', 'Blog', 'Contato'].map((item) => (
                <li key={item}><a className="hover:text-violet-600 hover:underline transition-all" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-xs text-slate-500">
              {['Privacy Policy', 'Terms of Service', 'Security', 'Trust & Safety'].map((item) => (
                <li key={item}><a className="hover:text-violet-600 hover:underline transition-all" href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">Â© 2026 Conecta Bairro. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-slate-300 text-3xl">verified_user</span>
            <span className="material-symbols-outlined text-slate-300 text-3xl">payments</span>
            <span className="material-symbols-outlined text-slate-300 text-3xl">security</span>
          </div>
        </div>
      </footer>
    </>
  );
}
