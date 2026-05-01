export function HomeSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-6 w-24 bg-surface-container-high rounded mb-4" />
          <div className="h-10 w-64 bg-surface-container-high rounded mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-surface-container-low p-8 rounded-3xl flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-surface-container-high rounded-2xl" />
                <div className="h-4 w-20 bg-surface-container-high rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="h-10 w-72 bg-surface-container-high rounded mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-surface-container-low rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-container-high" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-32 bg-surface-container-high rounded" />
                    <div className="h-3 w-24 bg-surface-container-high rounded" />
                  </div>
                </div>
                <div className="h-3 w-full bg-surface-container-high rounded" />
                <div className="h-3 w-3/4 bg-surface-container-high rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
