"use client";

import { useState, useEffect } from "react";

interface Solution {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const solutions: Solution[] = [
  {
    title: "CRM Systeme",
    description: "Kundenbeziehungen automatisiert verwalten",
    color: "from-[#3d55e2] to-[#5facdb]",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Workflow Automatisierung",
    description: "n8n-basierte Prozessoptimierung",
    color: "from-[#5facdb] to-[#A100FF]",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1a2 2 0 104 0V4z"
        />
      </svg>
    ),
  },
  {
    title: "Buchhaltung & Finanzen",
    description: "Automatisierte Rechnungsverarbeitung",
    color: "from-[#A100FF] to-[#3d55e2]",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Dokumentenmanagement",
    description: "OCR-basierte Dokumentenverarbeitung",
    color: "from-[#3d55e2] to-[#A100FF]",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Business Intelligence",
    description: "Power BI Dashboards ohne Lizenzkosten",
    color: "from-[#5facdb] to-[#3d55e2]",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "E-Commerce Integration",
    description: "Shop-Systeme nahtlos verknüpfen",
    color: "from-[#A100FF] to-[#5facdb]",
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
];

export function HeroSolutionsShowcase() {
  const [visibleSolutions, setVisibleSolutions] = useState<number[]>([]);

  useEffect(() => {
    let solutionIndex = 0;

    const interval = setInterval(() => {
      setVisibleSolutions((prev) => {
        const newVisible = [...prev, solutionIndex];
        solutionIndex = (solutionIndex + 1) % solutions.length;

        // Keep only the last 3 solutions visible
        return newVisible.slice(-3);
      });
    }, 2000); // New solution every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5 flex items-center justify-end overflow-hidden">
      <div className="relative w-full h-full flex flex-col justify-center items-end pr-8 lg:pr-16">
        {visibleSolutions.map((solutionIndex, displayIndex) => {
          const solution = solutions[solutionIndex];
          const delay = displayIndex * 200; // Staggered animation

          return (
            <div
              key={`${solutionIndex}-${Date.now()}-${displayIndex}`}
              className="absolute right-0 w-80 lg:w-96 mb-6"
              style={{
                bottom: `${displayIndex * 120 + 20}px`,
                animation: `slideUpFade 3s ease-out forwards`,
                animationDelay: `${delay}ms`,
                opacity: 0,
              }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-medium text-gray-800 mb-2 leading-tight">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/60 pointer-events-none"></div>
      </div>

      <style jsx>{`
        @keyframes slideUpFade {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
