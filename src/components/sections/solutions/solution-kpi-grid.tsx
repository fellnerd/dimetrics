import Typography from "@/components/ui/typography/typography";

export interface SolutionKPIItem {
  label?: string;
  value: string;
  description: string;
}

interface SolutionKPIGridProps {
  items: SolutionKPIItem[];
  columns?: 1 | 2 | 3;
  className?: string;
}

const columnClasses: Record<
  NonNullable<SolutionKPIGridProps["columns"]>,
  string
> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
};

export function SolutionKPIGrid({
  items,
  columns = 3,
  className = "",
}: SolutionKPIGridProps) {
  return (
    <div className={`grid gap-6 ${columnClasses[columns]} ${className}`.trim()}>
      {items.map((item) => (
        <div
          key={`${item.label ?? item.value}`}
          className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-white p-8 shadow-sm"
        >
          {item.label && (
            <span className="text-sm font-semibold uppercase tracking-wide text-[#A100FF]">
              {item.label}
            </span>
          )}
          <p className="text-4xl font-bold text-gray-900 mt-4">{item.value}</p>
          <Typography.Body className="mt-4 text-gray-700">
            {item.description}
          </Typography.Body>
        </div>
      ))}
    </div>
  );
}
