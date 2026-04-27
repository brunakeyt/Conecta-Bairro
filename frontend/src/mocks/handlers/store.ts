import { decodeIdentityClaims } from '@shoojs/auth';
import type { User } from '../../api/types';

const ROLE_KEY = 'cb.user_role';

export const profileStore = new Map<string, User>();

export function getCurrentIdentity() {
  const raw = localStorage.getItem('shoo_identity');
  if (!raw) return null;
  const identity = JSON.parse(raw) as { userId?: string | null; token?: string };
  if (!identity.userId || !identity.token) return null;
  return identity as { userId: string; token: string };
}

export function getOrCreateUser(): User | null {
  const identity = getCurrentIdentity();
  if (!identity) return null;

  const cached = profileStore.get(identity.userId);
  if (cached) return cached;

  const claims = decodeIdentityClaims(identity.token);
  const role = (localStorage.getItem(ROLE_KEY) ?? 'client') as User['role'];
  const user: User = {
    id: identity.userId,
    email: claims?.email ?? `${identity.userId.slice(0, 8)}@shoo.user`,
    name: claims?.name ?? 'Usuário',
    role,
    avatarUrl: claims?.picture ?? '',
    phone: '',
    createdAt: new Date().toISOString(),
  };
  profileStore.set(identity.userId, user);
  return user;
}
