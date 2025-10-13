"use client";

// import { motion } from "framer-motion"; // Deaktiviert - Ersetzt durch native Tailwind Animationen

interface FloatingDecorationsProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "both";
  size?: "sm" | "md" | "lg";
  colors?: {
    primary?: string;
    secondary?: string;
  };
}

export function FloatingDecorations({
  position = "both",
  size = "md",
  colors = {
    primary: "bg-[#3d55e2]/20",
    secondary: "bg-[#A100FF]/20",
  },
}: FloatingDecorationsProps) {
  const sizes = {
    sm: { primary: "w-16 h-16", secondary: "w-20 h-20" },
    md: { primary: "w-24 h-24", secondary: "w-32 h-32" },
    lg: { primary: "w-32 h-32", secondary: "w-40 h-40" },
  };

  const showTopLeft = position === "top-left" || position === "both";
  const showBottomRight = position === "bottom-right" || position === "both";

  return (
    <>
      {showTopLeft && (
        <div
          className={`absolute -top-4 -left-4 ${sizes[size].primary} ${colors.primary} rounded-full blur-xl animate-pulse`}
        />
      )}
      {showBottomRight && (
        <div
          className={`absolute -bottom-4 -right-4 ${sizes[size].secondary} ${colors.secondary} rounded-full blur-xl animate-pulse`}
        />
      )}
    </>
  );
}
