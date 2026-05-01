import { http, HttpResponse } from 'msw';
import { getOrCreateUser, profileStore } from './store';
import type { UserUpdate } from '../../api/types';

export const usersHandlers = [
  http.get('*/users/me', () => {
    const user = getOrCreateUser();
    if (!user) {
      return HttpResponse.json(
        { code: 'UNAUTHORIZED', message: 'Not authenticated' },
        { status: 401 },
      );
    }
    return HttpResponse.json(user, { status: 200 });
  }),

  http.put('*/users/me', async ({ request }) => {
    const user = getOrCreateUser();
    if (!user) {
      return HttpResponse.json(
        { code: 'UNAUTHORIZED', message: 'Not authenticated' },
        { status: 401 },
      );
    }
    const body = (await request.json()) as UserUpdate;
    const updated = { ...user, ...body };
    profileStore.set(user.id, updated);
    return HttpResponse.json(updated, { status: 200 });
  }),
];
