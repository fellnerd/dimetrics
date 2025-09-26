interface ServicesHeaderProps {
  title?: string;
  subtitle?: string;
  sectionLabel?: string;
  description?: string;
}

export function ServicesHeader({
  title = "Vom Plan zur Performance",
  subtitle = "Services",
  sectionLabel = "SERVICES",
  description = "Ganzheitliche Lösungen von der strategischen Beratung bis zur agilen Entwicklung und nahtlosen Integration – damit Ihr Unternehmen im digitalen Zeitalter nachhaltig erfolgreich bleibt.",
}: ServicesHeaderProps) {
  return (
    <div className="mb-16">
      <div className="text-[#A100FF] text-sm font-semibold tracking-wide uppercase mb-6">
        {sectionLabel}
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed font-light lg:pt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
