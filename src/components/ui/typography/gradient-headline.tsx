interface GradientHeadlineProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientHeadline({
  children,
  className = "",
}: GradientHeadlineProps) {
  return (
    <h2
      className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export function GradientText({
  children,
  gradient = "primary",
}: {
  children: React.ReactNode;
  gradient?: "primary" | "secondary" | "neutral";
}) {
  const gradients = {
    primary:
      "bg-gradient-to-r from-[#3d55e2] via-[#5facdb] to-[#A100FF] bg-clip-text text-transparent",
    secondary:
      "bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent",
    neutral:
      "bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent",
  };

  return <span className={`block ${gradients[gradient]}`}>{children}</span>;
}
