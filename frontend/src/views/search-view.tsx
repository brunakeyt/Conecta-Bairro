import { QueryProvider } from '../components/query-provider';
import { SearchAppBar } from '../components/features/search-app-bar';
import { FilterSidebar } from '../components/features/filter-sidebar';
import { SearchProCard } from '../components/features/search-pro-card';
import { Pagination } from '../components/ui/pagination';
import type { PaginatedProfessionals, SearchFilters } from '../api/types';

const mockFilters: SearchFilters = {
  category: 'reformas',
  state: 'SP',
  page: 1,
  limit: 20,
};

const mockProfessionalsData: PaginatedProfessionals = {
  data: [
    {
      id: '1',
      slug: 'ricardo-oliveira',
      name: 'Ricardo Oliveira',
      title: 'Especialista em Reformas',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBob6muMwdxs01IUdCIdszpO1fgsqwabTPA0XJFPfcSu5zgDyG0AzxGMXrExBeMcwPld6hCYaWynBk-432D65MijZikEDmwdvFTTtD6mg_Q3bdKj7EyYYpFY5c04qHnk69oEkX44mS3OG-_8WiD_xFZpA4xwwwNL7w_ToMo4y4MPFQC7D_2BoxNweVxK0JtkdA5lhIPX5RltG8IRBs9ZKXNa4o30XbBFp33RiwreoaNRAIsGAEytRbtZ5u37rwBaugcaMPDOiN0n-dt',
      state: 'SP',
      city: 'São Paulo',
      rating: 4.9,
      reviewsCount: 124,
      categories: ['reformas'],
    },
    {
      id: '2',
      slug: 'helena-mendes',
      name: 'Helena Mendes',
      title: 'Arquitetura de Interiores',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqUMUCQQGBRDdPbiZdGhUJX-dvgLjFGwM9dXRH8Sp22RKjEQd30NjZvYjxsdUr9fgVQ2Ey2pLIP1BcoPA6MiWQuB1asWdG03InuteRWxYhvlvqSPD-Y2zpvz0VRaNB1LJB7rWCSiXvc65hTtFeNIWvO8y4pn7SndLSjQ57WO2Qkk-Da7Ifo9bcnTK5-I59fpK-E-F9g719gk3pKff0bYM3Na7TwETpwEHBT_pRccbzuYXeSj7r_br6uIWSezaNXeHZxAWhhbh8MROk',
      state: 'PR',
      city: 'Curitiba',
      rating: 5.0,
      reviewsCount: 87,
      categories: ['arquitetura', 'design'],
    },
    {
      id: '3',
      slug: 'marcos-santos',
      name: 'Marcos Santos',
      title: 'Instalações Elétricas',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnPS3h_FzVG2HWbQyE9VARGsyhCD4INcXCPYUMQsXKukZttw59rWygn_PYHPs4i4au4EC63GxEQVK82pfHjJcWkFRo6aOs9T8gtRe4KZKKg9sN2g6OqfpXzQrm7wNtHnZ8i-mrwyNcgF9gP9HCuHVm0VF6vQLWkbc3l450tEUKs4_q2ZCIMzEmApXyXWYZFQ7yfY3bTY1abrbypdu9by66y2wbSNVcULu7OkYkN-hLr9H_TEofD6ZokIUjmJ7xHfo44ZlCnXy_WDQO',
      state: 'MG',
      city: 'Belo Horizonte',
      rating: 4.8,
      reviewsCount: 156,
      categories: ['eletrica'],
    },
    {
      id: '4',
      slug: 'andre-costa',
      name: 'André Costa',
      title: 'Pintura Comercial',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxwx1LKbZlEp2tJc-14IcXDpBEpt3AVscGY8sw_vJksd31myLP9vWGz-pMf-tShL-weV5dZQhBnBEhZ4vPAKjZli1lyNjH8lln93UM6y9yF1-ChBH4GcpJ0CuX3hWrMYEPW5X669LTPgb27p2UptISHJ16D_1DN7qoIpWBGs76ud35v9s_W8LIiQypD5OK6qctfW_fkg630JtM18ILM1UPG4zBtxY7jcj1I-3_rKThG0cdWLPBXd0qddidlqhtWJZkgXk-fpYOuv84',
      state: 'RJ',
      city: 'Rio de Janeiro',
      rating: 4.7,
      reviewsCount: 98,
      categories: ['pintura'],
    },
    {
      id: '5',
      slug: 'juliana-paes',
      name: 'Juliana Paes',
      title: 'Paisagismo & Botânica',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7x_kFByXUrqy9bbSkVBl7YgqtA43xOkAmCHRCV1trid8fblm5vbRydUQd_6AOOwDnhEVZzfW1eNs3ahFBzFRrT9owcFJH-5ogjieJJZrgLLu-hWCt0ToRJBlZYjjjEPM9hCXSk79W4BF80dcH9lmiJBoP98KYnHpel17VoSjuSdxlYpSa2bFLmUC8UMIPQeac663Ubc_GLzSZ7vJUQStA09e-bDG2J3WAp5s4oh0-PC4mR-SzERm72JDkY3Oq3490DlK7oo7qoPBU',
      state: 'RS',
      city: 'Porto Alegre',
      rating: 4.9,
      reviewsCount: 67,
      categories: ['paisagismo'],
    },
    {
      id: '6',
      slug: 'carlos-eduardo',
      name: 'Carlos Eduardo',
      title: 'Limpeza Profissional',
      avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDesgfNXFvvz2z9AgAYJClwkMR5VP0jw-CzcS537m1Pe85yjZCr4gMLEXgDgRpY8vCvawAZeu2jdp5GFOud2GmyJQIr4K21xUKDafWBowNBmWCXM1mruOz1smIrDO6XGXZ4VeOdhCIfNMN3QLDsrOOjIoVX3_E6qEYXa6s0Po0n9AUh5ChroFNrJQjhWL3XobiE2pyQ0XTl_UO0UkjPRx7mUw89qUT1C287Cgbk9pa_A5OUEb1Utsee2UpnRS7OMgLuiRMONUuAqULP',
      state: 'DF',
      city: 'Brasília',
      rating: 4.6,
      reviewsCount: 45,
      categories: ['limpeza'],
    },
  ],
  meta: {
    page: 1,
    limit: 20,
    total: 124,
    totalPages: 7,
  },
};

export default function SearchView() {
  return (
    <QueryProvider>
    <div className="bg-surface font-body text-on-surface">
      <SearchAppBar />

      {/* Layout */}
      <div className="flex pt-20">
        <FilterSidebar>
          <FilterSidebar.Group label="Categorias">
            <div className="space-y-3">
              <FilterSidebar.CheckboxItem label="Reformas" defaultChecked={mockFilters.category === 'reformas'} />
              <FilterSidebar.CheckboxItem label="EducaçÃ£o" defaultChecked={mockFilters.category === 'aulas'} />
              <FilterSidebar.CheckboxItem label="Beleza" defaultChecked={mockFilters.category === 'beleza'} />
              <FilterSidebar.CheckboxItem label="TI & Software" defaultChecked={mockFilters.category === 'tecnologia'} />
            </div>
          </FilterSidebar.Group>
          <FilterSidebar.Group label="Estado">
            <FilterSidebar.SelectInput defaultValue={mockFilters.state}>
              <option>Todos os Estados</option>
              <option value="SP">SÃ£o Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
            </FilterSidebar.SelectInput>
          </FilterSidebar.Group>
          <FilterSidebar.Group label="Cidade">
            <FilterSidebar.TextInput placeholder="Digite a cidade..." />
          </FilterSidebar.Group>
          <FilterSidebar.Group label="AvaliaçÃ£o">
            <div className="space-y-3">
              <FilterSidebar.CheckboxWithIcon label="4.5+ estrelas" icon="star" />
            </div>
          </FilterSidebar.Group>
        </FilterSidebar>

        {/* Main results */}
        <main className="flex-1 ml-[300px] p-8 min-h-screen">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h1 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-2">Resultados para {mockFilters.category}</h1>
              <p className="text-on-surface-variant font-medium">124 profissionais encontrados</p>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ordernar por</label>
              <div className="relative">
                <select className="appearance-none bg-white border border-slate-200 rounded-xl py-2 pl-4 pr-10 text-sm font-semibold shadow-sm focus:ring-2 focus:ring-primary/20 cursor-pointer">
                  <option>Mais Relevantes</option>
                  <option>Melhor Avaliados</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mockProfessionalsData.data.map((pro) => (
              <SearchProCard key={pro.id} professional={pro} />
            ))}
          </div>

          <Pagination meta={mockProfessionalsData.meta} />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="col-span-1">
            <span className="font-headline font-bold text-xl text-violet-700">The Editorial Marketplace</span>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed max-w-xs">Connecting top-tier professionals with discerning clients in a curated marketplace designed for quality over quantity.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-widest mb-6">Plataforma</h4>
            <ul className="space-y-3">
              <li><a className="text-xs text-slate-500 hover:text-violet-600 transition-all hover:underline" href="#">Privacidade</a></li>
              <li><a className="text-xs text-slate-500 hover:text-violet-600 transition-all hover:underline" href="#">Termos de Uso</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-widest mb-6">Suporte</h4>
            <ul className="space-y-3">
              <li><a className="text-xs text-slate-500 hover:text-violet-600 transition-all hover:underline" href="#">Segurança</a></li>
              <li><a className="text-xs text-slate-500 hover:text-violet-600 transition-all hover:underline" href="#">Centro de Ajuda</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="text-xs font-bold text-on-surface uppercase tracking-widest mb-6">Newsletter</h4>
            <div className="flex">
              <input className="bg-white border border-slate-200 rounded-l-xl px-4 py-2.5 text-xs w-full focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Seu melhor e-mail" type="email" />
              <button className="bg-primary text-white px-5 py-2.5 rounded-r-xl transition-all hover:bg-primary-container">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200/50 flex justify-between items-center">
          <p className="text-xs text-slate-500">Â© 2024 The Editorial Marketplace. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">share</span></a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-lg">public</span></a>
          </div>
        </div>
      </footer>
    </div>
    </QueryProvider>
  );
}
