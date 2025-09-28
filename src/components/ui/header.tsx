interface HeaderProps {
  title?: string;
  subtitle?: string;
  sectionLabel?: string;
  description?: string;
  orientation?: "left" | "right" | "center";
}

export function Header({
  title = "",
  subtitle = "",
  sectionLabel = "",
  description = "",
  orientation = "left",
}: HeaderProps) {
  // Orientierung-spezifische CSS-Klassen
  const getOrientationClasses = () => {
    switch (orientation) {
      case "center":
        return {
          container: "text-center",
          grid: "block space-y-8",
          sectionLabel: "text-center",
          description: "mx-auto max-w-3xl",
        };
      case "right":
        return {
          container: "text-right",
          grid: "grid lg:grid-cols-2 gap-16 items-start",
          sectionLabel: "text-right",
          title: "lg:order-2",
          description: "lg:order-1 lg:text-right",
        };
      default: // left
        return {
          container: "text-left",
          grid: "grid lg:grid-cols-2 gap-16 items-start",
          sectionLabel: "text-left",
          title: "",
          description: "",
        };
    }
  };

  const classes = getOrientationClasses();

  return (
    <div className={`mb-16 ${classes.container}`}>
      <div
        className={`text-[#A100FF] text-sm font-semibold tracking-wide uppercase mb-6 ${classes.sectionLabel}`}
      >
        {sectionLabel}
      </div>
      <div className={classes.grid}>
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ${classes.title}`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-xl text-gray-600 leading-relaxed font-light lg:pt-2 ${classes.description}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
