import Link from "next/link";
import { Card, CardContent } from "./card";
import { cn } from "@/utils/helpers";
import { PlanCardProps } from "@/types/home";

export function PlanCard({
  title,
  description,
  channel,
  className,
}: PlanCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:translate-y-[-5px]",
        className
      )}
    >
      <CardContent className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="text-gray-400 mb-4 min-h-[60px]">{description}</p>

        <Link
          href={channel}
          className={cn(
            "inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors",
            className
          )}
        >
          자세히 보기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </CardContent>
    </Card>
  );
}
