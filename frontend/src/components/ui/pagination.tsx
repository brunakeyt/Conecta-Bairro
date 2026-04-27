import type { PaginationMeta } from '../../api/types';

interface PaginationProps {
  meta: PaginationMeta;
  onPageChange?: (page: number) => void;
}

export function Pagination({ meta, onPageChange }: PaginationProps) {
  const { page, totalPages } = meta;
  const visiblePages = [page, page + 1, page + 2].filter(p => p <= totalPages);

  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-slate-50 transition-colors shadow-sm"
        disabled={page === 1}
        onClick={() => onPageChange?.(page - 1)}
      >
        <span className="material-symbols-outlined text-slate-400">chevron_left</span>
      </button>
      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange?.(p)}
          className={
            p === page
              ? 'w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold shadow-lg shadow-primary/30'
              : 'w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-slate-50 text-slate-500 font-bold transition-colors'
          }
        >
          {p}
        </button>
      ))}
      {totalPages > visiblePages[visiblePages.length - 1] + 1 && (
        <span className="text-slate-400 px-2">...</span>
      )}
      {totalPages > visiblePages[visiblePages.length - 1] && (
        <button
          onClick={() => onPageChange?.(totalPages)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-slate-50 text-slate-500 font-bold transition-colors"
        >
          {totalPages}
        </button>
      )}
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-slate-50 transition-colors shadow-sm"
        disabled={page === totalPages}
        onClick={() => onPageChange?.(page + 1)}
      >
        <span className="material-symbols-outlined text-slate-400">chevron_right</span>
      </button>
    </div>
  );
}