import { QueryProvider } from '../../components/query-provider';
import { PublicProfileContainer } from './container';

interface PublicProfilePageProps {
  slug: string;
}

export function PublicProfilePage({ slug }: PublicProfilePageProps) {
  return (
    <QueryProvider>
      <PublicProfileContainer slug={slug} />
    </QueryProvider>
  );
}
