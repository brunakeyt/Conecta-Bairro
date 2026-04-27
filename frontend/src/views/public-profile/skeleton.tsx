export function PublicProfileSkeleton() {
  return (
    <div className="animate-pulse pt-20 pb-24">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        <div className="space-y-8">
          <div className="bg-primary-fixed rounded-2xl p-12">
            <div className="flex gap-8">
              <div className="w-44 h-44 rounded-full bg-surface-container-high shrink-0" />
              <div className="flex-1 space-y-4 pt-4">
                <div className="h-8 w-64 bg-surface-container-high rounded" />
                <div className="h-5 w-48 bg-surface-container-high rounded" />
                <div className="h-4 w-56 bg-surface-container-high rounded" />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-2xl h-48" />
            <div className="bg-primary-container p-8 rounded-2xl h-48" />
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-2xl space-y-6">
            <div className="h-7 w-48 bg-surface-container-high rounded" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="py-6 border-t border-surface-container-low space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high" />
                  <div className="space-y-1">
                    <div className="h-3 w-28 bg-surface-container-high rounded" />
                    <div className="h-3 w-20 bg-surface-container-high rounded" />
                  </div>
                </div>
                <div className="h-3 w-full bg-surface-container-high rounded" />
                <div className="h-3 w-3/4 bg-surface-container-high rounded" />
              </div>
            ))}
          </div>
        </div>
        <aside>
          <div className="sticky top-24 space-y-6">
            <div className="bg-surface-container-lowest p-8 rounded-2xl h-64" />
            <div className="bg-surface-container-low p-6 rounded-2xl h-40" />
          </div>
        </aside>
      </div>
    </div>
  );
}
