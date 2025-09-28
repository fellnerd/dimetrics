import React from "react";
import { ReactNode } from "react";

// Base Content Component
interface ContentProps {
  children: ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "7xl" | "full";
}

// Column Component
interface ColumnProps {
  children: ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
  gap?: "sm" | "md" | "lg" | "xl";
}

// Row Component
interface RowProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg" | "xl";
  alignItems?: "start" | "center" | "end" | "stretch";
}

// Main Content Component
const Content = ({
  children,
  className = "",
  spacing = "lg",
  maxWidth = "7xl",
}: ContentProps) => {
  const spacingClasses = {
    sm: "space-y-4",
    md: "space-y-8",
    lg: "space-y-12",
    xl: "space-y-16",
  };

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto ${className}`}>
      {children}
    </div>
  );
};

// Column Component
const Column = ({
  children,
  span,
  className = "",
  gap = "md",
}: ColumnProps) => {
  const gapClasses = {
    sm: "space-y-2",
    md: "space-y-4",
    lg: "space-y-6",
    xl: "space-y-8",
  };

  const spanClass = span ? `col-span-${span}` : "";

  return (
    <div className={`${spanClass} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

// Row Component
const Row = ({
  children,
  className = "",
  cols = 1,
  gap = "md",
  alignItems = "start",
}: RowProps) => {
  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-8",
    xl: "gap-12",
  };

  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-6",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  return (
    <div
      className={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${alignClasses[alignItems]} ${className}`}
    >
      {children}
    </div>
  );
};

// Compound Export mit Subkomponenten
Content.Column = Column;
Content.Row = Row;

export default Content;
