import { useState } from 'react';
import { DashboardAppBar } from '../components/features/dashboard-app-bar';
import type { User, ProfessionalProfile, UserUpdate, ProfessionalUpdate } from '../api/types';

export interface ProfileFormState extends UserUpdate {
  professional?: ProfessionalUpdate;
}

interface ProfileEditViewProps {
  user: User;
  professional?: ProfessionalProfile;
  onSave: (formState: ProfileFormState) => Promise<void>;
  saving: boolean;
}

const inputClass =
  'w-full rounded-xl px-4 py-3 font-medium border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-[#F3F4F6] text-[#1F2937]';

export default function ProfileEditView({ user, professional, onSave, saving }: ProfileEditViewProps) {
  const [form, setForm] = useState<ProfileFormState>({
    name: user.name,
    phone: user.phone ?? '',
    avatarUrl: user.avatarUrl ?? '',
    address: user.address ?? { state: '', city: '', district: '', street: '', number: '' },
    professional: professional
      ? {
          title: professional.title ?? '',
          description: professional.description ?? '',
          registrationNumber: professional.registrationNumber ?? '',
          instagram: professional.instagram ?? '',
          website: professional.website ?? '',
          categories: professional.categories?.map((c) => (typeof c === 'string' ? c : c.id)) ?? [],
        }
      : undefined,
  });

  const set = (key: keyof ProfileFormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const setAddress = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, address: { ...prev.address!, [key]: value } }));

  const setPro = (key: keyof ProfessionalUpdate, value: string) =>
    setForm((prev) => ({ ...prev, professional: { ...prev.professional, [key]: value } }));

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    void onSave(form);
  };

  const isProfessional = !!professional;
  const saveLabel = isProfessional ? 'Salvar Perfil Profissional' : 'Salvar Perfil';

  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      <DashboardAppBar />

      <main className="pt-28 pb-20 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-80 flex-shrink-0">
            <div className="sticky top-28 space-y-2">
              <h1 className="font-headline text-2xl font-bold mb-6 tracking-tight px-4">Configurações</h1>
              <a className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-primary-container text-white shadow-lg transition-all" href="#">
                <span className="material-symbols-outlined">person</span>
                <span className="font-semibold">Dados Pessoais</span>
              </a>
              {/* <a className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-on-surface-variant hover:bg-surface-container-low transition-all" href="#">
                <span className="material-symbols-outlined">location_on</span>
                <span className="font-medium">Endereço</span>
              </a> */}
              <div className="mt-12 pt-8 border-t border-slate-200 px-4">
                <div className="flex items-center gap-4 p-4 rounded-3xl bg-surface-container-low">
                  {user.avatarUrl ? (
                    <img className="w-12 h-12 rounded-full object-cover" src={user.avatarUrl} alt={user.name} />
                  ) : (
                    <span className="material-symbols-outlined w-12 h-12 text-4xl flex items-center justify-center text-on-surface-variant">account_circle</span>
                  )}
                  <div>
                    <p className="text-sm font-bold">{user.name}</p>
                    <p className="text-xs text-on-surface-variant capitalize">
                      {user.role === 'professional' ? 'Profissional' : 'Cliente'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <section className="flex-grow space-y-8">
            <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_12px_32px_rgba(25,28,29,0.06)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full -mr-16 -mt-16" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="relative group">
                  {user.avatarUrl ? (
                    <img
                      className="w-32 h-32 rounded-3xl object-cover ring-4 ring-surface-container"
                      src={user.avatarUrl}
                      alt={user.name}
                    />
                  ) : (
                    <span className="material-symbols-outlined w-32 h-32 text-8xl flex items-center justify-center text-on-surface-variant rounded-3xl ring-4 ring-surface-container">account_circle</span>
                  )}
                  <button type="button" className="absolute -bottom-2 -right-2 bg-secondary-container p-2 rounded-xl shadow-lg hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white">photo_camera</span>
                  </button>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="font-headline text-3xl font-bold tracking-tight">
                    {isProfessional ? 'Dados Profissionais' : 'Meu Perfil'}
                  </h2>
                  <p className="text-on-surface-variant mt-2 max-w-md">
                    Mantenha suas informações atualizadas para garantir a conformidade do seu cadastro.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_12px_32px_rgba(25,28,29,0.06)]">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Personal info */}
                <div>
                  <h3 className="font-headline text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">badge</span>
                    Informações Principais
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Nome Completo</label>
                      <input className={inputClass} type="text" value={form.name ?? ''} onChange={(e) => set('name', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">E-mail</label>
                      <input className={inputClass} type="email" value={user.email} readOnly />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Telefone</label>
                      <input className={inputClass} type="tel" value={form.phone ?? ''} onChange={(e) => set('phone', e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="font-headline text-lg font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    Endereço
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Estado</label>
                      <input className={inputClass} type="text" value={form.address?.state ?? ''} onChange={(e) => setAddress('state', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Cidade</label>
                      <input className={inputClass} type="text" value={form.address?.city ?? ''} onChange={(e) => setAddress('city', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Bairro</label>
                      <input className={inputClass} type="text" value={form.address?.district ?? ''} onChange={(e) => setAddress('district', e.target.value)} />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Rua</label>
                      <input className={inputClass} type="text" value={form.address?.street ?? ''} onChange={(e) => setAddress('street', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Número</label>
                      <input className={inputClass} type="text" value={form.address?.number ?? ''} onChange={(e) => setAddress('number', e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Professional section — only for pros */}
                {isProfessional && (
                  <div className="pt-8 border-t border-slate-100">
                    <h3 className="font-headline text-lg font-bold mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">work</span>
                      Dados Profissionais
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Título / Profissão</label>
                        <input className={inputClass} type="text" value={form.professional?.title ?? ''} onChange={(e) => setPro('title', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Registro Profissional</label>
                        <input className={inputClass} type="text" value={form.professional?.registrationNumber ?? ''} onChange={(e) => setPro('registrationNumber', e.target.value)} />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Sobre você</label>
                        <textarea
                          className={`${inputClass} resize-none`}
                          rows={3}
                          value={form.professional?.description ?? ''}
                          onChange={(e) => setPro('description', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Instagram</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium">@</span>
                          <input className={`${inputClass} pl-8`} type="text" value={form.professional?.instagram ?? ''} onChange={(e) => setPro('instagram', e.target.value)} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Site</label>
                        <input className={inputClass} type="url" placeholder="https://seusite.com.br" value={form.professional?.website ?? ''} onChange={(e) => setPro('website', e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-end gap-4">
                  <button
                    className="px-8 py-3 rounded-full font-semibold text-on-surface-variant hover:bg-surface-container-low transition-all"
                    type="button"
                    onClick={() => window.location.reload()}
                  >
                    Descartar Alterações
                  </button>
                  <button
                    className="px-10 py-3 rounded-full font-bold bg-secondary-container text-on-secondary-container shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={saving}
                  >
                    {saving ? 'Salvando...' : saveLabel}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-center px-4 bg-white/80 backdrop-blur-xl border-t border-slate-100 md:hidden z-50">
        <a className="flex flex-col items-center justify-center text-slate-400" href="/">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400" href="#">
          <span className="material-symbols-outlined">pending_actions</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">Requests</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400" href="#">
          <span className="material-symbols-outlined">auto_awesome</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">Leads</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-400" href="#">
          <span className="material-symbols-outlined">payments</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">Finance</span>
        </a>
        <a className="flex flex-col items-center justify-center text-violet-700 scale-110" href="/profile">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>person_edit</span>
          <span className="text-[10px] font-medium uppercase tracking-widest mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
}
