import type { Category, Professional } from '../../api/types';
import { useListCategories } from '../../api/generated/endpoints/categories/categories';
import { useListFeaturedProfessionals } from '../../api/generated/endpoints/professionals/professionals';
import { HomeSkeleton } from './skeleton';
import { HomeView } from './view';

export function HomeContainer() {
  const catsQuery = useListCategories();
  const featuredQuery = useListFeaturedProfessionals();

  const isPending = catsQuery.isPending || featuredQuery.isPending;
  const isError = catsQuery.isError || featuredQuery.isError;

  if (isPending) return <HomeSkeleton />;

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <span className="material-symbols-outlined text-5xl text-error">error_outline</span>
          <p className="text-on-surface-variant">Não foi possível carregar a página.</p>
          <button
            className="px-6 py-3 bg-primary text-white rounded-xl font-semibold"
            onClick={() => { catsQuery.refetch(); featuredQuery.refetch(); }}
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  const categories = (catsQuery.data as unknown as Category[]) ?? [];
  const featured = (featuredQuery.data as unknown as Professional[]) ?? [];

  return <HomeView categories={categories} featured={featured} />;
}
