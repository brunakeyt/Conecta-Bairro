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
import { PROFESSIONALS, PROFESSIONAL_PROFILES } from '../../mocks/fixtures/professionals';

const MOCK_PRO_PROFILE = PROFESSIONAL_PROFILES[0] as unknown as ProfessionalProfile;
const MOCK_USER: User = {
  id: MOCK_PRO_PROFILE.id,
  email: MOCK_PRO_PROFILE.email,
  name: MOCK_PRO_PROFILE.name,
  role: 'professional',
  avatarUrl: MOCK_PRO_PROFILE.avatarUrl ?? PROFESSIONALS[0].avatarUrl ?? '',
  phone: MOCK_PRO_PROFILE.phone,
  address: MOCK_PRO_PROFILE.address,
  createdAt: MOCK_PRO_PROFILE.createdAt,
};

export function ProfileContainer() {
  const { identity, loading } = useAuth();
  const isMock = import.meta.env.PUBLIC_ENABLE_MOCK === 'true';

  useEffect(() => {
    if (loading) return;
    if (isMock) return;
    if (!identity.userId) {
      window.location.href = '/login';
    }
  }, [loading, identity.userId, isMock]);

  const isReady = !loading && !!identity.userId;

  const profileQuery = useGetMyProfile({ query: { enabled: isReady && !isMock } });
  const fetchedUser = profileQuery.data as unknown as User | undefined;
  const user = isMock ? MOCK_USER : fetchedUser;
  const isProfessional = user?.role === 'professional';

  const proProfileQuery = useGetMyProfessionalProfile({
    query: { enabled: isReady && isProfessional && !isMock },
  });
  const fetchedPro = proProfileQuery.data as unknown as ProfessionalProfile | undefined;
  const professional = isMock ? MOCK_PRO_PROFILE : fetchedPro;

  const updateUserMutation = useUpdateMyProfile();
  const updateProMutation = useUpdateMyProfessionalProfile();

  const handleSave = async (formState: ProfileFormState) => {
    if (isMock) {
      console.log('[mock] saving profile', formState);
      return;
    }
    const { professional: proFields, ...userFields } = formState;
    await updateUserMutation.mutateAsync({ data: userFields });
    if (isProfessional && proFields) {
      await updateProMutation.mutateAsync({ data: proFields });
    }
  };

  const saving = updateUserMutation.isPending || updateProMutation.isPending;

  if (!isMock && (loading || profileQuery.isPending || !user)) {
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
      user={user!}
      professional={isProfessional ? professional : undefined}
      onSave={handleSave}
      saving={saving}
    />
  );
}
