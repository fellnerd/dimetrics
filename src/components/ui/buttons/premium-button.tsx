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
  size = "lg",
  showArrow = true,
  className = "",
  disabled = false,
}: PremiumButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-[#3d55e2] to-[#5facdb] hover:from-[#5facdb] hover:to-[#A100FF] text-white shadow-2xl hover:shadow-[#5facdb]/25",
    secondary:
      "bg-gradient-to-r from-[#A100FF] to-[#3d55e2] hover:from-[#3d55e2] hover:to-[#A100FF] text-white shadow-xl",
    ghost:
      "border-2 border-[#5facdb] text-[#5facdb] hover:bg-[#5facdb] hover:text-white",
  };

  const sizes = {
    sm: "px-6 py-3 text-sm rounded-lg",
    md: "px-8 py-4 text-base rounded-xl",
    lg: "px-10 py-5 text-lg rounded-xl",
    xl: "px-12 py-6 text-xl rounded-2xl",
  };

  const baseClasses = `group relative inline-flex items-center font-semibold transition-all duration-500 transform hover:scale-105 overflow-hidden ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      <span className="relative flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {content}
    </motion.button>
  );
}
