import { http, HttpResponse } from 'msw';
import { CATEGORIES } from '../fixtures/categories';

export const categoriesHandlers = [
  http.get('*/categories', () => {
    return HttpResponse.json(CATEGORIES);
  }),
];
