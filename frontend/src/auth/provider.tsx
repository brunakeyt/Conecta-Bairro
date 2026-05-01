import { createContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { useShooAuth, type SessionState } from '@shoojs/react';
import type { IdentityClaims } from '@shoojs/types';
import type { ShooIdentity } from '@shoojs/auth';
import { getRole, setRole, getPendingRole, setPendingRole, clearPendingRole } from './storage';

type AuthContextValue = {
  identity: ShooIdentity;
  claims: IdentityClaims | null;
  role: 'client' | 'professional';
  sessionState: SessionState;
  loading: boolean;
  signIn: (role: 'client' | 'professional') => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useShooAuth({
    callbackPath: '/auth/callback',
    requestPii: true,
    autoSessionMonitor: true,
    sessionMonitorIntervalMs: 60_000,
  });

  const [role, setRoleState] = useState<'client' | 'professional'>(() => getRole());
  const appliedRef = useRef(false);

  useEffect(() => {
    if (!auth.identity.userId || appliedRef.current) return;
    appliedRef.current = true;
    const pending = getPendingRole();
    if (pending) {
      setRole(pending);
      setRoleState(pending);
      clearPendingRole();
    }
  }, [auth.identity.userId]);

  useEffect(() => {
    if (!auth.identity.userId) {
      appliedRef.current = false;
    }
  }, [auth.identity.userId]);

  const signIn = async (selectedRole: 'client' | 'professional') => {
    setPendingRole(selectedRole);
    await auth.signIn({ requestPii: true });
  };

  return (
    <AuthContext.Provider
      value={{
        identity: auth.identity,
        claims: auth.claims,
        role,
        sessionState: auth.sessionState,
        loading: auth.loading,
        signIn,
        signOut: auth.clearIdentity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
