"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PremiumButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
}

export function PremiumButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  showArrow = true,
  className = "",
  disabled = false,
}: PremiumButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-[#3d55e2] to-[#5facdb] hover:from-[#5facdb] hover:to-[#A100FF] text-white hover:!text-white shadow-lg hover:shadow-[#5facdb]/20",
    secondary:
      "bg-gradient-to-r from-[#A100FF] to-[#3d55e2] hover:from-[#3d55e2] hover:to-[#A100FF] text-white hover:!text-white shadow-xl hover:shadow-[#A100FF]/20",
    ghost:
      "border-2 border-[#5facdb] text-[#5facdb] hover:bg-[#5facdb] hover:!text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg gap-1",
    md: "px-6 py-3 text-base rounded-xl gap-2",
    lg: "px-8 py-4 text-lg rounded-xl gap-2",
    xl: "px-10 py-5 text-xl rounded-2xl gap-3",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
  };

  const baseClasses = `group inline-flex items-center font-medium transition-all duration-300 hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="relative text-white group-hover:!text-white">
        {children}
      </span>
      {showArrow && (
        <ArrowRight
          className={`${iconSizes[size]} text-white group-hover:!text-white group-hover:translate-x-1 transition-transform duration-300`}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
