import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';

export function useSearchFilters() {
  return useQueryStates({
    q: parseAsString.withDefault(''),
    category: parseAsString.withDefault(''),
    state: parseAsString.withDefault(''),
    city: parseAsString.withDefault(''),
    rating: parseAsString.withDefault(''),
    sort: parseAsString.withDefault('relevance'),
    page: parseAsInteger.withDefault(1),
    limit: parseAsInteger.withDefault(20),
  });
}

export type SearchFilters = ReturnType<typeof useSearchFilters>[0];
export type SetSearchFilters = ReturnType<typeof useSearchFilters>[1];
