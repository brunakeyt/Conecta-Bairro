import type { Professional } from '../../api/types';

interface SearchProCardProps {
  professional: Professional;
}

export function SearchProCard({ professional }: SearchProCardProps) {
  const { name, title, avatarUrl, state, city, rating, reviewsCount, categories } = professional;

  return (
    <a href={`/professionals/${professional.slug}`} className="block bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(25,28,29,0.06)] group cursor-pointer border border-transparent hover:border-primary/10 transition-all text-inherit no-underline">
      <div className="h-64 overflow-hidden">
        <img
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={avatarUrl}
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-primary font-medium">{title}</p>
            <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-xs">location_on</span> {city}, {state}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-high px-3 py-1 rounded-full">
            <span className="material-symbols-outlined text-secondary-container text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
            <span className="font-bold text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
          {reviewsCount} avaliações
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span key={cat} className="bg-surface-container-low px-3 py-1 rounded-full text-xs font-semibold">{cat}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
