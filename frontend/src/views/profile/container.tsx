import { useEffect } from 'react';
import { useAuth } from '../../auth/use-auth';
import {
  useGetMyProfile,
  useUpdateMyProfile,
} from '../../api/generated/endpoints/users/users';
import {
  useGetMyProfessionalProfile,
  useUpdateMyProfessionalProfile,
} from '../../api/generated/endpoints/professionals/professionals';
import type { User, ProfessionalProfile } from '../../api/types';
import type { ProfileFormState } from '../profile-edit-view';
import ProfileEditView from '../profile-edit-view';

export function ProfileContainer() {
  const { identity, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (!identity.userId) {
      window.location.href = '/login';
    }
  }, [loading, identity.userId]);

  const isReady = !loading && !!identity.userId;

  const profileQuery = useGetMyProfile({ query: { enabled: isReady } });
  const user = profileQuery.data as unknown as User | undefined;
  const isProfessional = user?.role === 'professional';

  const proProfileQuery = useGetMyProfessionalProfile({
    query: { enabled: isReady && isProfessional },
  });
  const professional = proProfileQuery.data as unknown as ProfessionalProfile | undefined;

  const updateUserMutation = useUpdateMyProfile();
  const updateProMutation = useUpdateMyProfessionalProfile();

  const handleSave = async (formState: ProfileFormState) => {
    const { professional: proFields, ...userFields } = formState;
    await updateUserMutation.mutateAsync({ data: userFields });
    if (isProfessional && proFields) {
      await updateProMutation.mutateAsync({ data: proFields });
    }
  };

  const saving = updateUserMutation.isPending || updateProMutation.isPending;

  if (loading || profileQuery.isPending || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <span
          className="material-symbols-outlined text-primary text-5xl animate-spin"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          progress_activity
        </span>
      </div>
    );
  }

  return (
    <ProfileEditView
      user={user}
      professional={isProfessional ? professional : undefined}
      onSave={handleSave}
      saving={saving}
    />
  );
}
