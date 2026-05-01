import { useEffect } from 'react';
import { QueryProvider } from '../../components/query-provider';
import { useAuth } from '../../auth/use-auth';

function CallbackInner() {
  const auth = useAuth();

  useEffect(() => {
    if (auth.loading) return;
    window.location.href = auth.identity.userId ? '/' : '/login';
  }, [auth.loading, auth.identity.userId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="flex flex-col items-center gap-4">
        <span
          className="material-symbols-outlined text-primary text-5xl animate-spin"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          progress_activity
        </span>
        <p className="text-on-surface-variant font-medium">Entrando...</p>
      </div>
    </div>
  );
}

export function AuthCallbackPage() {
  return (
    <QueryProvider>
      <CallbackInner />
    </QueryProvider>
  );
}
