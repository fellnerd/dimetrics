interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
  textAlign?: "left" | "center" | "right";
}

export function SectionDescription({
  children,
  className = "",
  maxWidth = "max-w-4xl",
  textAlign = "center",
}: SectionDescriptionProps) {
  const alignClass =
    textAlign === "center" ? "mx-auto" : textAlign === "right" ? "ml-auto" : "";

  return (
    <p
      className={`text-xl text-gray-300 ${maxWidth} ${alignClass} leading-relaxed font-light ${className}`}
    >
      {children}
    </p>
  );
}

export function HighlightedText({
  children,
  color = "primary",
}: {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent" | "white";
}) {
  const colors = {
    primary: "text-[#5facdb] font-medium",
    secondary: "text-[#3d55e2] font-medium",
    accent: "text-[#A100FF] font-medium",
    white: "text-white font-medium",
  };

  return <span className={colors[color]}>{children}</span>;
}
