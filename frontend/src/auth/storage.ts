const ROLE_KEY = 'cb.user_role';
const PENDING_ROLE_KEY = 'cb.pending_role';

export function getRole(): 'client' | 'professional' {
  return (localStorage.getItem(ROLE_KEY) as 'client' | 'professional') ?? 'client';
}

export function setRole(role: 'client' | 'professional') {
  localStorage.setItem(ROLE_KEY, role);
}

export function getPendingRole(): 'client' | 'professional' | null {
  return localStorage.getItem(PENDING_ROLE_KEY) as 'client' | 'professional' | null;
}

export function setPendingRole(role: 'client' | 'professional') {
  localStorage.setItem(PENDING_ROLE_KEY, role);
}

export function clearPendingRole() {
  localStorage.removeItem(PENDING_ROLE_KEY);
}
