const CheckIcon = () => (
  <div className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
    <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3}>
      <path d="M3 8l3.5 3.5L13 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function FacilitiesList({ facilities }: { facilities?: string[] }) {
  if (!facilities?.length) return null;

  return (
    <div className="mt-12">
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-sm font-black uppercase tracking-widest text-secondary">
          What you&apos;ll get
        </h3>
        <div className="flex-1 h-px bg-base-200" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {facilities.map((facility) => (
          <div
            key={facility}
            className="flex items-center gap-4 bg-white border border-base-200 rounded-2xl p-4 hover:border-primary hover:shadow-md transition-all duration-300 group"
          >
            <CheckIcon />
            <span className="text-sm font-bold text-neutral-700 group-hover:text-primary transition-colors">
              {facility}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}