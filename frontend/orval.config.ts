import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: {
      target: './api.yaml',
    },
    output: {
      mode: 'tags-split',
      target: 'src/api/generated/endpoints',
      schemas: 'src/api/generated/models',
      client: 'react-query',
      mock: true,
      clean: true,
      override: {
        mutator: {
          path: './src/api/ky-client.ts',
          name: 'customFetch',
        },
        query: {
          useQuery: true,
          useSuspenseQuery: true,
        },
      },
    },
  },
});
