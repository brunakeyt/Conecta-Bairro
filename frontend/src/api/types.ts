// Types derived from api.yaml

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'professional';
  avatarUrl: string;
  phone: string;
  address?: Address;
  createdAt: string;
}

export interface UserUpdate {
  name?: string;
  phone?: string;
  avatarUrl?: string;
  address?: Address;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}

export interface Address {
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatarUrl: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Professional {
  id: string;
  userId?: string;
  slug: string;
  name: string;
  title: string;
  avatarUrl: string;
  state: string;
  city: string;
  rating: number;
  reviewsCount: number;
  categories: string[];
}

export interface ProfessionalProfile {
  id: string;
  userId?: string;
  slug: string;
  name: string;
  title: string;
  description: string;
  avatarUrl: string;
  phone: string;
  email: string;
  instagram: string;
  website: string;
  registrationNumber: string;
  address: Address;
  state: string;
  city: string;
  district: string;
  rating: number;
  reviewsCount: number;
  reviews: Review[];
  categories: Category[];
  verified: boolean;
  available: boolean;
  createdAt: string;
}

export interface ProfessionalUpdate {
  title?: string;
  description?: string;
  phone?: string;
  instagram?: string;
  website?: string;
  registrationNumber?: string;
  categories?: string[];
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedProfessionals {
  data: Professional[];
  meta: PaginationMeta;
}

export interface PaginatedReviews {
  data: Review[];
  meta: PaginationMeta;
}

export interface Error {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

// Search filters
export interface SearchFilters {
  q?: string;
  category?: string;
  state?: string;
  city?: string;
  rating?: number;
  sort?: 'relevance' | 'rating' | 'newest' | 'reviews_count';
  page?: number;
  limit?: number;
}

// View props types
export interface HomeViewData {
  categories: Category[];
  featuredProfessionals: Professional[];
}

export interface SearchViewData {
  professionals: PaginatedProfessionals;
  filters: SearchFilters;
}

export interface PublicProfileViewData {
  professional: ProfessionalProfile;
  reviews: PaginatedReviews;
}

export interface ProfileEditViewData {
  user: User;
}