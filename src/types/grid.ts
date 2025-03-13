import type { ReactNode } from "react";

export interface GridProps {
  children: ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5;
  gap?: "sm" | "md" | "lg";
}

export interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}
