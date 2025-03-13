import { Props } from "@/types/home";
import Link from "next/link";

export function PlanCard({ children }: Props) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
      {children}
    </div>
  );
}

export function PlanCardTitle({ children }: Props) {
  return <h3 className="text-xl font-bold text-white mb-3">{children}</h3>;
}

export function PlanCardDescription({ children }: Props) {
  return <p className="text-gray-400">{children}</p>;
}

export function PlanCardLink({ channel }: { channel: string }) {
  return (
    <Link href={channel} className="text-blue-400 hover:text-blue-300"></Link>
  );
}
