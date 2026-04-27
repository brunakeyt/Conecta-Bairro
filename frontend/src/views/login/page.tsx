import { QueryProvider } from '../../components/query-provider';
import { LoginContainer } from './container';

export function LoginPage() {
  return (
    <QueryProvider>
      <LoginContainer />
    </QueryProvider>
  );
}
