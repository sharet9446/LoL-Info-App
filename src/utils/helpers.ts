export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function filterNonZeroStats(
  stats: Record<string, number>
): [string, number][] {
  return Object.entries(stats).filter(
    ([, value]) => value !== 0 && value !== undefined
  );
}
