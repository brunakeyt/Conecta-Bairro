import { QueryProvider } from '../../components/query-provider';
import { ProfileContainer } from './container';

export function ProfilePage() {
  return (
    <QueryProvider>
      <ProfileContainer />
    </QueryProvider>
  );
}
