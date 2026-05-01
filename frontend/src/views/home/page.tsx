import { QueryProvider } from '../../components/query-provider';
import { HomeContainer } from './container';

export function HomePage() {
  return (
    <QueryProvider>
      <HomeContainer />
    </QueryProvider>
  );
}
