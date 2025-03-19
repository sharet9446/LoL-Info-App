import { ChampionDetail } from "@/types/champion";
import { translationTagName } from "@/utils/translation";
import Image from "next/image";
import Link from "next/link";

export function ChampionCard({ champion }: { champion: ChampionDetail }) {
  return (
    <Link
      href={`/champions/${champion.id}`}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className="bg-gray-900/70 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1 duration-300">
        <div className="relative h-40 overflow-hidden">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
            alt={champion.name}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-lg font-bold text-white">{champion.name}</h3>
            <p className="text-sm text-gray-300 italic">{champion.title}</p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={48}
                height={48}
                className="rounded-full border-2 border-blue-700"
              />
            </div>
            <div className="flex flex-wrap gap-1">
              {champion.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs bg-blue-900/30 text-blue-200 rounded-md border border-blue-800/30"
                >
                  {translationTagName(tag)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
