import React from "react";
import { ReactNode } from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  sectionLabel?: string;
  description?: string;
  orientation?: "left" | "right" | "center";
}

interface HeadingProps {
  children: ReactNode;
  className?: string;
  theme?: "light" | "dark";
  sectionLabel?: string;
  description?: string;
  orientation?: "left" | "right" | "center";
}

export function Header({
  title = "",
  subtitle = "",
  sectionLabel = "",
  description = "",
  orientation = "left",
}: HeaderProps) {
  // Orientierung-spezifische CSS-Klassen
  const getOrientationClasses = () => {
    switch (orientation) {
      case "center":
        return {
          container: "text-center",
          grid: "block space-y-8",
          sectionLabel: "text-center",
          description: "mx-auto",
        };
      case "right":
        return {
          container: "text-right",
          grid: "grid lg:grid-cols-2 gap-16 items-start",
          sectionLabel: "text-right",
          title: "lg:order-2",
          description: "lg:order-1 lg:text-right",
        };
      default: // left
        return {
          container: "text-left",
          grid: "grid lg:grid-cols-2 gap-16 items-start",
          sectionLabel: "text-left",
          title: "",
          description: "",
        };
    }
  };

  const classes = getOrientationClasses();

  return (
    <div className={`${classes.container}`}>
      <div
        className={`text-[#A100FF] text-sm font-semibold tracking-wide uppercase mb-6 ${classes.sectionLabel}`}
      >
        {sectionLabel}
      </div>
      <div className={classes.grid}>
        <h2
          className={`text-3xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900 ${classes.title}`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-xl text-gray-600 leading-relaxed font-light lg:pt-2 ${classes.description}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// H1 Komponente
const H1 = ({
  children,
  className = "",
  theme = "light",
  sectionLabel,
  description,
  orientation = "left",
}: HeadingProps) => {
  const themeClass = theme === "dark" ? "text-white" : "text-gray-900";

  // Orientierung-spezifische CSS-Klassen
  const getOrientationClasses = () => {
    switch (orientation) {
      case "center":
        return {
          container: "text-center",
          grid: "block space-y-8",
          sectionLabel: "text-center",
          description: "mx-auto",
        };
      case "right":
        return {
          container: "text-right",
          grid: "grid lg:grid-cols-2 gap-16 items-start",
          sectionLabel: "text-right",
          title: "lg:order-2",
          description: "lg:order-1 lg:text-right",
        };
      default: // left
        return {
          container: "text-left",
          grid: "grid lg:grid-cols-2 gap-16 items-start",
          sectionLabel: "text-left",
          title: "",
          description: "",
        };
    }
  };

  const classes = getOrientationClasses();

  return (
    <div className={`${classes.container}`}>
      {sectionLabel && (
        <div
          className={`text-[#A100FF] text-sm font-semibold tracking-wide uppercase mb-6 ${classes.sectionLabel}`}
        >
          {sectionLabel}
        </div>
      )}
      <div className={classes.grid}>
        <h1
          className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${themeClass} ${classes.title} ${className}`}
        >
          {children}
        </h1>
        {description && (
          <p
            className={`text-xl text-gray-600 leading-relaxed font-light lg:pt-2 ${classes.description}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

// H2 Komponente
const H2 = ({
  children,
  className = "",
  theme = "light",
  sectionLabel,
  description,
  orientation = "left",
}: HeadingProps) => {
  const themeClass = theme === "dark" ? "text-white" : "text-gray-900";

  const getOrientationClasses = () => {
    switch (orientation) {
      case "center":
        return {
          container: "text-center",
          grid: "block space-y-8",
          sectionLabel: "text-center",
          description: "mx-auto",
        };
      case "right":
        return {
          container: "text-right",
          grid: "items-start",
          sectionLabel: "text-right",
          title: "lg:order-2",
          description: "lg:order-1 lg:text-right",
        };
      default: // left
        return {
          container: "text-left",
          grid: "items-start",
          sectionLabel: "text-left",
          title: "",
          description: "",
        };
    }
  };

  const classes = getOrientationClasses();

  return (
    <div className={`mb-16 ${classes.container}`}>
      {sectionLabel && (
        <div
          className={`text-[#A100FF] text-sm font-semibold tracking-wide uppercase mb-6 ${classes.sectionLabel}`}
        >
          {sectionLabel}
        </div>
      )}
      <div className={classes.grid}>
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${themeClass} ${classes.title} ${className}`}
        >
          {children}
        </h2>
        {description && (
          <p
            className={`text-xl text-gray-600 leading-relaxed font-light lg:pt-2 ${classes.description}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

// H3 Komponente
const H3 = ({
  children,
  className = "",
  theme = "light",
  sectionLabel,
  description,
  orientation = "left",
}: HeadingProps) => {
  const themeClass = theme === "dark" ? "text-white" : "text-gray-900";

  const getOrientationClasses = () => {
    switch (orientation) {
      case "center":
        return {
          container: "text-center",
          grid: "block space-y-8",
          sectionLabel: "text-center",
          description: "mx-auto",
        };
      case "right":
        return {
          container: "text-right",
          grid: "grid lg:grid-cols-2 gap-16 items-start",
          sectionLabel: "text-right",
          title: "lg:order-2",
          description: "lg:order-1 lg:text-right",
        };
      default: // left
        return {
          container: "text-left",
          grid: "items-start",
          sectionLabel: "text-left",
          title: "",
          description: "",
        };
    }
  };

  const classes = getOrientationClasses();

  return (
    <div className={`${classes.container}`}>
      {sectionLabel && (
        <div
          className={`text-[#A100FF] text-sm font-semibold tracking-wide uppercase mb-6 ${classes.sectionLabel}`}
        >
          {sectionLabel}
        </div>
      )}
      <div className={classes.grid}>
        <h3
          className={`text-3xl lg:text-5xl font-bold mb-8 leading-tight ${themeClass} ${classes.title} ${className}`}
        >
          {children}
        </h3>
        {description && (
          <p
            className={`text-xl text-gray-600 leading-relaxed font-light lg:pt-2 ${classes.description}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

// H4 Komponente
const H4 = ({
  children,
  className = "",
  theme = "light",
  sectionLabel,
  description,
  orientation = "left",
}: HeadingProps) => {
  const themeClass = theme === "dark" ? "text-white" : "text-gray-900";

  const getOrientationClasses = () => {
    switch (orientation) {
      case "center":
        return {
          container: "text-center",
          grid: "block space-y-8",
          sectionLabel: "text-center",
          description: "mx-auto",
        };
      case "right":
        return {
          container: "text-right",
          grid: "grid lg:grid-cols-2 gap-16 items-start",
          sectionLabel: "text-right",
          title: "lg:order-2",
          description: "lg:order-1 lg:text-right",
        };
      default: // left
        return {
          container: "text-left",
          grid: "grid lg:grid-cols-2 gap-16 items-start",
          sectionLabel: "text-left",
          title: "",
          description: "",
        };
    }
  };

  const classes = getOrientationClasses();

  return (
    <div className={`${classes.container}`}>
      {sectionLabel && (
        <div
          className={`text-[#A100FF] text-sm font-semibold tracking-wide uppercase mb-6 ${classes.sectionLabel}`}
        >
          {sectionLabel}
        </div>
      )}
      <div className={classes.grid}>
        <h4
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight ${themeClass} ${classes.title} ${className}`}
        >
          {children}
        </h4>
        {description && (
          <p
            className={`text-xl text-gray-600 leading-relaxed font-light lg:pt-2 ${classes.description}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

// Compound Export mit Subkomponenten
Header.H1 = H1;
Header.H2 = H2;
Header.H3 = H3;
Header.H4 = H4;
