import { useRef, useState } from 'react';
import { SearchAppBar } from '../../components/features/search-app-bar';
import { FilterSidebar } from '../../components/features/filter-sidebar';
import { SearchProCard } from '../../components/features/search-pro-card';
import { Pagination } from '../../components/ui/pagination';
import type { Category, PaginatedProfessionals } from '../../api/types';
import type { SearchFilters, SetSearchFilters } from './use-search-filters';
import { UF_LIST } from './uf-list';

const SORT_OPTIONS = [
  { value: 'relevance', label: 'Mais Relevantes' },
  { value: 'rating', label: 'Melhor Avaliados' },
  { value: 'reviews_count', label: 'Mais Avaliados' },
  { value: 'newest', label: 'Mais Recentes' },
];

interface SearchViewProps {
  professionals: PaginatedProfessionals;
  categories: Category[];
  filters: SearchFilters;
  onFilterChange: SetSearchFilters;
}

export function SearchView({ professionals, categories, filters, onFilterChange }: SearchViewProps) {
  const queryRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cityRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [cityInputValue, setCityInputValue] = useState(filters.city);

  const handleQueryChange = (value: string) => {
    if (queryRef.current) clearTimeout(queryRef.current);
    queryRef.current = setTimeout(() => onFilterChange({ q: value, page: 1 }), 300);
  };

  const handleCityChange = (value: string) => {
    setCityInputValue(value);
    if (cityRef.current) clearTimeout(cityRef.current);
    cityRef.current = setTimeout(() => onFilterChange({ city: value, page: 1 }), 300);
  };

  const handleClearFilters = () => {
    setCityInputValue('');
    onFilterChange({ q: '', category: '', state: '', city: '', rating: '', sort: 'relevance', page: 1 });
  };

  const selectedSlugs = filters.category ? filters.category.split(',').filter(Boolean) : [];

  const handleCategoryToggle = (slug: string, checked: boolean) => {
    const updated = checked
      ? [...selectedSlugs, slug].join(',')
      : selectedSlugs.filter(s => s !== slug).join(',');
    onFilterChange({ category: updated, page: 1 });
  };

  const hasActiveFilters = !!(filters.q || filters.category || filters.state || filters.city || filters.rating);

  const selectedCategoryNames = selectedSlugs
    .map(slug => categories.find(c => c.slug === slug)?.name ?? slug);

  const titleText = filters.q
    ? `Resultados para "${filters.q}"`
    : selectedCategoryNames.length > 0
    ? selectedCategoryNames.join(' + ')
    : filters.state || filters.city
    ? `Profissionais${filters.city ? ` em ${filters.city}` : ''}${filters.state ? ` · ${filters.state}` : ''}`
    : 'Todos os Profissionais';

  return (
    <div className="bg-surface font-body text-on-surface">
      <SearchAppBar onSearch={handleQueryChange} searchValue={filters.q} />

      <div className="flex pt-20">
        <FilterSidebar>
          <FilterSidebar.Group label="Categorias">
            <div className="space-y-3">
              {categories?.map((cat) => (
                <FilterSidebar.CheckboxItem
                  key={cat.slug}
                  label={cat.name}
                  checked={selectedSlugs.includes(cat.slug)}
                  onChange={(checked) => handleCategoryToggle(cat.slug, checked)}
                />
              ))}
            </div>
          </FilterSidebar.Group>

          <FilterSidebar.Group label="Estado">
            <FilterSidebar.SelectInput
              value={filters.state}
              onChange={(e) => onFilterChange({ state: e.target.value, page: 1 })}
            >
              <option value="">Todos os Estados</option>
              {UF_LIST.map(({ code, name }) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </FilterSidebar.SelectInput>
          </FilterSidebar.Group>

          <FilterSidebar.Group label="Cidade">
            <FilterSidebar.TextInput
              placeholder="Digite a cidade..."
              value={cityInputValue}
              onChange={(e) => handleCityChange(e.target.value)}
            />
          </FilterSidebar.Group>

          <FilterSidebar.Group label="Avaliação">
            <div className="space-y-3">
              <FilterSidebar.CheckboxWithIcon
                label="4.5+ estrelas"
                icon="star"
                checked={filters.rating === '4.5'}
                onChange={(checked) => onFilterChange({ rating: checked ? '4.5' : '', page: 1 })}
              />
            </div>
          </FilterSidebar.Group>

          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="w-full mt-2 py-2.5 px-4 text-sm font-semibold text-error border border-error/30 rounded-xl hover:bg-error/5 transition-colors"
            >
              Limpar filtros
            </button>
          )}
        </FilterSidebar>

        <main className="flex-1 ml-[300px] p-8 min-h-screen">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h1 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-2">
                {titleText}
              </h1>
              <p className="text-on-surface-variant font-medium">
                {professionals.meta.total} profissiona{professionals.meta.total === 1 ? 'l' : 'is'} encontrado{professionals.meta.total === 1 ? '' : 's'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ordenar por</label>
              <select
                value={filters.sort}
                onChange={(e) => onFilterChange({ sort: e.target.value, page: 1 })}
                className="bg-white border border-slate-200 rounded-xl py-2 pl-4 pr-8 text-sm font-semibold shadow-sm focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                {SORT_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          {professionals.data.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <span className="material-symbols-outlined text-6xl text-outline mb-4">search_off</span>
              <p className="text-xl font-semibold text-on-surface mb-2">Nenhum profissional encontrado</p>
              <p className="text-on-surface-variant">Tente ajustar os filtros ou buscar por outra categoria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {professionals.data.map((pro) => (
                <SearchProCard key={pro.id} professional={pro} />
              ))}
            </div>
          )}

          <Pagination
            meta={professionals.meta}
            onPageChange={(page) => onFilterChange({ page })}
          />
        </main>
      </div>

      <footer className="bg-slate-50 border-t border-slate-200 py-16 px-8">
        <div className="max-w-7xl mx-auto mt-8 flex justify-between items-center">
          <p className="text-xs text-slate-500">© 2026 Conecta Bairro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
