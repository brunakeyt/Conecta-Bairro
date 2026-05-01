import { QueryProvider } from '../../components/query-provider';
import { SearchContainer } from './container';

export function SearchPage() {
  return (
    <QueryProvider>
      <SearchContainer />
    </QueryProvider>
  );
}
