export function SearchSkeleton() {
  return (
    <div className="animate-pulse flex pt-20">
      <aside className="w-[300px] shrink-0 p-6 space-y-6">
        <div className="h-5 w-24 bg-surface-container-high rounded" />
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="h-4 w-20 bg-surface-container-high rounded" />
            <div className="h-8 w-full bg-surface-container-high rounded" />
          </div>
        ))}
      </aside>
      <main className="flex-1 ml-[300px] p-8">
        <div className="h-8 w-64 bg-surface-container-high rounded mb-4" />
        <div className="h-4 w-40 bg-surface-container-high rounded mb-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-surface-container-low rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-surface-container-high" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 bg-surface-container-high rounded" />
                  <div className="h-3 w-24 bg-surface-container-high rounded" />
                </div>
              </div>
              <div className="h-3 w-full bg-surface-container-high rounded" />
              <div className="h-10 w-full bg-surface-container-high rounded-xl" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
