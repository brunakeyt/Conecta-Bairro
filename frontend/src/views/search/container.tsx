import { keepPreviousData } from '@tanstack/react-query';
import type { Category, PaginatedProfessionals } from '../../api/types';
import { useListCategories } from '../../api/generated/endpoints/categories/categories';
import { useSearchProfessionals } from '../../api/generated/endpoints/professionals/professionals';
import { SearchSkeleton } from './skeleton';
import { SearchView } from './view';
import { useSearchFilters } from './use-search-filters';

const EMPTY: PaginatedProfessionals = { data: [], meta: { page: 1, limit: 20, total: 0, totalPages: 1 } };

export function SearchContainer() {
  const [filters, setFilters] = useSearchFilters();

  const catsQuery = useListCategories();
  const searchQuery = useSearchProfessionals(
    {
      q: filters.q || undefined,
      category: filters.category || undefined,
      state: filters.state || undefined,
      city: filters.city || undefined,
      rating: filters.rating ? Number(filters.rating) : undefined,
      sort: (filters.sort as 'relevance' | 'rating' | 'newest' | 'reviews_count') || undefined,
      page: filters.page,
      limit: filters.limit,
    },
    { query: { placeholderData: keepPreviousData } },
  );

  if (searchQuery.isPending || catsQuery.isPending) return <SearchSkeleton />;

  if (searchQuery.isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <span className="material-symbols-outlined text-5xl text-error">error_outline</span>
          <p className="text-on-surface-variant">Não foi possível carregar os resultados.</p>
          <button
            className="px-6 py-3 bg-primary text-white rounded-xl font-semibold"
            onClick={() => searchQuery.refetch()}
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  const professionals = searchQuery.data?.data ?? EMPTY;
  const categories = catsQuery.data?.data ?? [];

  return (
    <SearchView
      professionals={professionals}
      categories={categories}
      filters={filters}
      onFilterChange={setFilters}
    />
  );
}
