import { fetchChampionDetail } from "@/app/apis/champion.api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChampionDetailProps } from "@/types/champion";
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

  return (
    <div>
      {championDetailArray.map((champion) => (
        <div key={champion.id}>
          <h1>실험체:{champion.name}</h1>

          <Carousel>
            <CarouselContent>
              {champion.skins.map((skin) => (
                <CarouselItem key={skin.id} className="basis-1/3">
                  <Image
                    width={1000}
                    height={250}
                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`}
                    alt={champion.name}
                    loading="lazy"
                  />
                  {skin.name === "default" ? champion.name : skin.name}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export default ChampionDetailPage;
