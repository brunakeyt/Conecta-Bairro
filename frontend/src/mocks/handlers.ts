import type { RequestHandler } from 'msw';
import { categoriesHandlers } from './handlers/categories';
import { professionalsHandlers } from './handlers/professionals';
import { usersHandlers } from './handlers/users';
import { professionalsMeHandlers } from './handlers/professionals-me';

export const handlers: RequestHandler[] = [
  ...usersHandlers,
  ...professionalsMeHandlers,
  ...categoriesHandlers,
  ...professionalsHandlers,
];
