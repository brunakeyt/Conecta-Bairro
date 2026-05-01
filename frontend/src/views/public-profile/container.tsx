import type { PaginatedReviews, ProfessionalProfile } from '../../api/types';
import {
  useGetProfessionalBySlug,
  useListProfessionalReviews,
} from '../../api/generated/endpoints/professionals/professionals';
import { PublicProfileSkeleton } from './skeleton';
import { PublicProfileView } from './view';

interface PublicProfileContainerProps {
  slug: string;
}

const EMPTY_REVIEWS: PaginatedReviews = { data: [], meta: { page: 1, limit: 20, total: 0, totalPages: 1 } };

export function PublicProfileContainer({ slug }: PublicProfileContainerProps) {
  const profileQuery = useGetProfessionalBySlug(slug);
  const profile = profileQuery.data as unknown as ProfessionalProfile | undefined;

  const reviewsQuery = useListProfessionalReviews(profile?.id ?? '', undefined, {
    query: { enabled: !!profile?.id },
  });

  if (profileQuery.isPending) return <PublicProfileSkeleton />;

  if (profileQuery.isError) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center space-y-4">
          <span className="material-symbols-outlined text-6xl text-outline">person_off</span>
          <p className="text-2xl font-bold">Profissional não encontrado</p>
          <p className="text-on-surface-variant">O perfil que você está buscando não existe ou foi removido.</p>
          <a href="/explore" className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-semibold">
            Buscar profissionais
          </a>
        </div>
      </div>
    );
  }

  if (!profile) return <PublicProfileSkeleton />;

  const reviews = (reviewsQuery.data as unknown as PaginatedReviews) ?? EMPTY_REVIEWS;

  return <PublicProfileView professional={profile} reviews={reviews} />;
}
