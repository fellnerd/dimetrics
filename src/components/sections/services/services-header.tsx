interface ServicesHeaderProps {
  title?: string;
  subtitle?: string;
  sectionLabel?: string;
}

export function ServicesHeader({
  title = "Services, mit denen Sie sich neu erfinden können",
  subtitle = "Services",
  sectionLabel = "SERVICES",
}: ServicesHeaderProps) {
  return (
    <div className="mb-16">
      <div className="text-[#A100FF] text-sm font-semibold tracking-wide uppercase mb-6">
        {sectionLabel}
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-16 leading-tight">
        {title}
      </h2>
    </div>
  );
}
