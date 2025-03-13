import { cn } from "@/lib/utils";
import { GridProps, PageHeaderProps } from "@/types/grid";

export function Grid({
  children,
  className,
  columns = 4,
  gap = "md",
}: GridProps) {
  const columnsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  };

  const gapClass = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  return (
    <div
      className={cn(
        `grid ${columnsClass[columns]} ${gapClass[gap]} animate-fade-in`,
        className
      )}
    >
      {children}
    </div>
  );
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-8", className)}>
      <h1 className="text-3xl font-bold text-white mb-2 lol-gradient-text">
        {title}
      </h1>
      {description && <p className="text-gray-400">{description}</p>}
    </div>
  );
}
