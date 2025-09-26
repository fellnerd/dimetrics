interface AccentLineProps {
  direction?: "vertical" | "horizontal";
  position?: "left" | "right" | "top" | "bottom";
  height?: string;
  width?: string;
  gradient?: "primary" | "secondary" | "custom";
  opacity?: number;
  className?: string;
}

export function AccentLine({
  direction = "vertical",
  position = "left",
  height = "h-full",
  width = "w-1",
  gradient = "primary",
  opacity = 60,
  className = "",
}: AccentLineProps) {
  const gradients = {
    primary: "bg-gradient-to-b from-[#3d55e2] via-[#5facdb] to-[#A100FF]",
    secondary: "bg-gradient-to-r from-[#5facdb] to-[#A100FF]",
    custom: className.includes("bg-")
      ? ""
      : "bg-gradient-to-b from-[#3d55e2] via-[#5facdb] to-[#A100FF]",
  };

  const positions = {
    left: "-left-0",
    right: "-right-0",
    top: "-top-0",
    bottom: "-bottom-0",
  };

  const dimensions =
    direction === "vertical" ? `${width} ${height}` : `${height} ${width}`;

  return (
    <div
      className={`absolute ${positions[position]} ${dimensions} ${gradients[gradient]} rounded-full opacity-${opacity} ${className}`}
    />
  );
}
