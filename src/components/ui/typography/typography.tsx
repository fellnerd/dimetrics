import React from "react";
import { ReactNode } from "react";

// Base Text Props
interface BaseTextProps {
  children: ReactNode;
  className?: string;
}

// Section Label (wie in Header verwendet)
interface SectionLabelProps extends BaseTextProps {
  color?: "purple" | "blue" | "cyan";
}

const SectionLabel = ({
  children,
  className = "",
  color = "purple",
}: SectionLabelProps) => {
  const colorClasses = {
    purple: "text-[#A100FF]",
    blue: "text-[#3d55e2]",
    cyan: "text-[#5facdb]",
  };

  return (
    <div
      className={`${colorClasses[color]} text-sm font-semibold tracking-wide uppercase mb-6 ${className}`}
    >
      {children}
    </div>
  );
};

// Main Headline (wie in Header verwendet)
const Headline = ({ children, className = "" }: BaseTextProps) => {
  return (
    <h1
      className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ${className}`}
    >
      {children}
    </h1>
  );
};

// Sub Headline
const SubHeadline = ({ children, className = "" }: BaseTextProps) => {
  return (
    <h2
      className={`text-2xl lg:text-3xl font-bold text-gray-900 leading-tight ${className}`}
    >
      {children}
    </h2>
  );
};

// Section Title
const SectionTitle = ({ children, className = "" }: BaseTextProps) => {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 mb-4 ${className}`}>
      {children}
    </h3>
  );
};

// Lead Text (große Beschreibung)
const Lead = ({ children, className = "" }: BaseTextProps) => {
  return (
    <p
      className={`text-xl text-gray-600 leading-relaxed font-light ${className}`}
    >
      {children}
    </p>
  );
};

// Body Text (Standard Text)
const Body = ({ children, className = "" }: BaseTextProps) => {
  return (
    <p className={`text-base text-gray-600 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

// Small Text
const Small = ({ children, className = "" }: BaseTextProps) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};

// Muted Text (noch dezenter)
const Muted = ({ children, className = "" }: BaseTextProps) => {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
};

// Link Text
interface LinkProps extends BaseTextProps {
  href?: string;
  onClick?: () => void;
}

const Link = ({ children, className = "", href, onClick }: LinkProps) => {
  const baseClasses =
    "text-[#3d55e2] hover:text-[#5facdb] transition-colors duration-300 underline decoration-1 underline-offset-2";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

// Compound Export mit Subkomponenten
const Typography = {
  SectionLabel,
  Headline,
  SubHeadline,
  SectionTitle,
  Lead,
  Body,
  Small,
  Muted,
  Link,
};

export default Typography;
