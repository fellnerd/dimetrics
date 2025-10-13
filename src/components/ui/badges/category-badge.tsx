interface CategoryBadgeProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent" | "neutral";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

export function CategoryBadge({
  children,
  color = "primary",
  size = "md",
  animated = true,
  className = "",
}: CategoryBadgeProps) {
  const colors = {
    primary:
      "bg-gradient-to-r from-[#3d55e2]/20 to-[#5facdb]/20 text-[#5facdb] border-[#5facdb]/20",
    secondary:
      "bg-gradient-to-r from-[#5facdb]/20 to-[#A100FF]/20 text-[#A100FF] border-[#A100FF]/20",
    accent:
      "bg-gradient-to-r from-[#A100FF]/20 to-[#3d55e2]/20 text-[#3d55e2] border-[#3d55e2]/20",
    neutral:
      "bg-gradient-to-r from-gray-800/20 to-gray-600/20 text-gray-300 border-gray-600/20",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const dotColor = {
    primary: "bg-[#5facdb]",
    secondary: "bg-[#A100FF]",
    accent: "bg-[#3d55e2]",
    neutral: "bg-gray-400",
  };

  return (
    <span
      className={`inline-flex items-center ${colors[color]} ${sizes[size]} rounded-full font-semibold border backdrop-blur-sm shadow-lg ${className}`}
    >
      <div
        className={`w-2 h-2 ${dotColor[color]} rounded-full mr-3 ${
          animated ? "animate-pulse" : ""
        }`}
      ></div>
      {children}
    </span>
  );
}
