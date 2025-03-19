import { fetchChampionDetail } from "@/app/apis/champion.api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LOL_API_ADDRESS } from "@/constants/lol-api";
import { ChampionDetailProps } from "@/types/champion";
import { translationTagName } from "@/utils/translation";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export async function generateMetadata({
  params,
}: ChampionDetailProps): Promise<Metadata> {
  const championName = params.id;
  const championDetail = await fetchChampionDetail(championName);

  return {
    title: `${championDetail[championName].name} - 챔피언 상세 정보`,
    description: championDetail[championName].title,
  };
}

async function ChampionDetailPage({ params }: ChampionDetailProps) {
  const championDetail = await fetchChampionDetail(params.id);
  const championDetailArray = Object.values(championDetail);
  const champion = championDetailArray[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      {/* 헤더 섹션 - 챔피언 기본 정보 */}
      <div className="relative mb-12">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 overflow-hidden rounded-xl h-64 -z-10">
          <Image
            src={`${LOL_API_ADDRESS}/img/champion/splash/${champion.id}_0.jpg`}
            alt={champion.name}
            fill
            className="object-cover opacity-20 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>

        {/* 챔피언 정보 */}
        <div className="pt-8 pb-4 flex flex-col md:flex-row items-center md:items-end gap-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src={`${LOL_API_ADDRESS}/15.5.1/img/champion/${champion.image.full}`}
              alt={champion.name}
              width={160}
              height={160}
              className="rounded-full border-4 border-blue-600 shadow-lg shadow-blue-500/20"
            />
          </div>

          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold lol-gradient-text">
                {champion.name}
              </h1>
              <p className="text-xl text-gray-400 italic">{champion.title}</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
              {champion.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-900/40 text-blue-200 rounded-full text-sm border border-blue-800/40"
                >
                  {translationTagName(tag)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 챔피언 정보 탭 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* 기본 정보 */}
        <div className="bg-gray-900/70 rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors">
          <h2 className="text-xl font-bold mb-4 text-white">챔피언 정보</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {champion.lore || "정보가 없습니다."}
          </p>

          <h3 className="text-lg font-semibold mb-3 text-blue-300">
            기본 능력치
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="text-gray-400">체력</span>
              <span className="text-white">{champion.stats.hp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">마나</span>
              <span className="text-white">{champion.stats.mp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">방어력</span>
              <span className="text-white">{champion.stats.armor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">마법 저항력</span>
              <span className="text-white">{champion.stats.spellblock}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">공격력</span>
              <span className="text-white">{champion.stats.attackdamage}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">공격 속도</span>
              <span className="text-white">{champion.stats.attackspeed}</span>
            </div>
          </div>
        </div>

        {/* 스킬 정보 (패시브 + 챔피언 스킬) */}
        <div className="bg-gray-900/70 rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors">
          <h2 className="text-xl font-bold mb-4 text-white">챔피언 스킬</h2>

          {/* 패시브 스킬 */}
          <div className="mb-6">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 relative">
                <Image
                  src={`${LOL_API_ADDRESS}/15.5.1/img/passive/${champion.passive.image.full}`}
                  alt={champion.passive.name}
                  width={48}
                  height={48}
                  className="rounded-lg border border-blue-800/50"
                />
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-xs font-bold border border-blue-700">
                  P
                </div>
              </div>
              <div>
                <h3 className="text-md font-semibold text-blue-300">
                  {champion.passive.name} (패시브)
                </h3>
                <p className="text-gray-300 text-xs">
                  {champion.passive.description}
                </p>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-t border-gray-800 my-4"></div>

          {/* 챔피언 스킬 */}
          <div className="space-y-4">
            {champion.spells.map((spell, index) => (
              <div key={spell.id} className="flex gap-3 items-start">
                <div className="flex-shrink-0 relative">
                  <Image
                    src={`${LOL_API_ADDRESS}/15.5.1/img/spell/${spell.image.full}`}
                    alt={spell.name}
                    width={48}
                    height={48}
                    className="rounded-lg border border-blue-800/50"
                  />
                  <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-xs font-bold border border-blue-700">
                    {["Q", "W", "E", "R"][index]}
                  </div>
                </div>
                <div>
                  <h3 className="text-md font-semibold text-blue-300">
                    {spell.name}
                  </h3>
                  <p className="text-gray-300 text-xs">{spell.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 스킨 캐러셀 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">챔피언 스킨</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {champion.skins.map((skin) => (
              <CarouselItem
                key={skin.id}
                className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-1"
              >
                <div className="bg-gray-900/70 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      width={800}
                      height={400}
                      src={`${LOL_API_ADDRESS}/img/champion/splash/${champion.id}_${skin.num}.jpg`}
                      alt={skin.name === "default" ? champion.name : skin.name}
                      loading="lazy"
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {skin.name === "default" ? champion.name : skin.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-blue-900/80 border-blue-700 hover:bg-blue-800" />
          <CarouselNext className="right-2 bg-blue-900/80 border-blue-700 hover:bg-blue-800" />
        </Carousel>
      </div>
    </div>
  );
}

export default ChampionDetailPage;
