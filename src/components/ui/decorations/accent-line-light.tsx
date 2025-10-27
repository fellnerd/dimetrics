interface AccentLineProps {
  position?: "left" | "right" | "center";
  className?: string;
}

export function AccentLineLight({
  position = "left",
  className = "",
}: AccentLineProps) {
  const positionClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} top-0 w-2 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-cyan-600 rounded-full opacity-90 shadow-lg ${className}`}
    />
  );
}
