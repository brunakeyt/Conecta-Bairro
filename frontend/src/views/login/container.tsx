import { useEffect } from 'react';
import { useAuth } from '../../auth/use-auth';
import LoginView from '../login-view';

export function LoginContainer() {
  const auth = useAuth();

  useEffect(() => {
    if (auth.loading) return;
    if (auth.identity.userId) {
      window.location.href = '/';
    }
  }, [auth.loading, auth.identity.userId]);

  if (auth.loading || auth.identity.userId) return null;

  return (
    <LoginView
      loading={auth.loading}
      onSignIn={(role) => void auth.signIn(role)}
    />
  );
}
