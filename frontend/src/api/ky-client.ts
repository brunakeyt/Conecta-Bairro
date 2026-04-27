import ky from 'ky';

const BASE_URL = (import.meta.env.PUBLIC_API_BASE_URL ?? '').replace(/\/$/, '');

export async function customFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await ky(`${BASE_URL}${url}`, options as Parameters<typeof ky>[1]);
  const contentType = response.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    return response.json<T>();
  }
  return response.text() as Promise<T>;
}
