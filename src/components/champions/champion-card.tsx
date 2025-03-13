import type { Champion } from "@/types/champion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function ChampionCard({ champion }: { champion: Champion }) {
  return (
    <Link href={`champions/${champion.id}`}>
      <Card className="hover:border-blue-600 transition-colors h-full flex flex-col">
        <CardHeader className="pb-2">
          <CardTitle className="line-clamp-1">{champion.name}</CardTitle>
          <p className="text-sm text-gray-400 italic">{champion.title}</p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <div className="flex gap-4 mb-3">
            {/* 챔피언 이미지 */}
            <div className="flex-shrink-0">
              <Image
                width={64}
                height={64}
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                className="rounded-full border-2 border-blue-700 bg-gray-800 object-cover"
                loading="lazy"
              />
            </div>

            {/* 챔피언 정보 */}
            <div className="flex-1 min-w-0">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">역할</span>
                  <span className="text-white text-sm">
                    {champion.tags.join(", ")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">ID</span>
                  <span className="text-white text-sm">{champion.id}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 챔피언 태그 */}
          <CardFooter className="mt-auto pt-2">
            {champion.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-blue-900/30 text-blue-200 rounded-md border border-blue-800/30 mr-1"
              >
                {tag}
              </span>
            ))}
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
}
