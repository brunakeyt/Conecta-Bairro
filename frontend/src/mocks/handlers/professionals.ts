import { http, HttpResponse } from 'msw';
import type { PaginatedProfessionals, PaginatedReviews } from '../../api/generated/models';
import { PROFESSIONALS, PROFESSIONAL_PROFILES } from '../fixtures/professionals';
import { REVIEWS_BY_PROFESSIONAL } from '../fixtures/reviews';

export const professionalsHandlers = [
  http.get('*/professionals/featured', () => {
    return HttpResponse.json(PROFESSIONALS.slice(0, 3));
  }),

  http.get('*/professionals/slug/:slug', ({ params }) => {
    const profile = PROFESSIONAL_PROFILES.find((p) => p.slug === params.slug);
    if (!profile) {
      return HttpResponse.json({ code: 'NOT_FOUND', message: 'Profissional não encontrado' }, { status: 404 });
    }
    return HttpResponse.json(profile);
  }),

  http.get('*/professionals/:id/reviews', ({ params, request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') ?? '1');
    const limit = Number(url.searchParams.get('limit') ?? '20');

    const all = REVIEWS_BY_PROFESSIONAL[params.id as string] ?? [];
    const total = all.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const data = all.slice((page - 1) * limit, page * limit);

    const response: PaginatedReviews = { data, meta: { page, limit, total, totalPages } };
    return HttpResponse.json(response);
  }),

  http.get('*/professionals', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') ?? '1');
    const limit = Number(url.searchParams.get('limit') ?? '20');
    const q = url.searchParams.get('q')?.toLowerCase();
    const category = url.searchParams.get('category');
    const state = url.searchParams.get('state');
    const city = url.searchParams.get('city')?.toLowerCase();
    const ratingMin = url.searchParams.get('rating') ? Number(url.searchParams.get('rating')) : undefined;
    const sort = url.searchParams.get('sort');

    let filtered = PROFESSIONALS.filter((p) => {
      if (q && !p.name?.toLowerCase().includes(q) && !p.title?.toLowerCase().includes(q)) return false;
      if (category) {
        const cats = category.split(',').filter(Boolean);
        if (cats.length > 0 && !cats.some(c => p.categories?.includes(c))) return false;
      }
      if (state && p.state !== state) return false;
      if (city && !p.city?.toLowerCase().includes(city)) return false;
      if (ratingMin !== undefined && (p.rating ?? 0) < ratingMin) return false;
      return true;
    });

    if (sort === 'rating') filtered = [...filtered].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    else if (sort === 'reviews_count') filtered = [...filtered].sort((a, b) => (b.reviewsCount ?? 0) - (a.reviewsCount ?? 0));
    else if (sort === 'newest') filtered = [...filtered].reverse();

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const data = filtered.slice((page - 1) * limit, page * limit);

    const response: PaginatedProfessionals = { data, meta: { page, limit, total, totalPages } };
    return HttpResponse.json(response);
  }),
];
