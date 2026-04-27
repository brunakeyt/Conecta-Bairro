export async function initMocks() {
  if (import.meta.env.PUBLIC_ENABLE_MOCK !== 'true') return;

  const { worker } = await import('./browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
}
