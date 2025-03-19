import { LANGUAGE, LOL_API_ADDRESS, LOL_VER } from "@/constants/lol-api";
import { Champion } from "@/types/champion";

const championApi = `${LOL_API_ADDRESS}/${LOL_VER}/data/${LANGUAGE}/champion.json`;
const championDetailApi = `${LOL_API_ADDRESS}/${LOL_VER}/data/${LANGUAGE}/champion`;

// 챔피언 데이터 가져오기
export async function fetchChampions(): Promise<Champion> {
  const res = await fetch(championApi, { next: { revalidate: 86400 } });
  const data = await res.json();
  const champions = data.data;

  return champions;
}

// 특정 챔피언 데이터 가져오기
export async function fetchChampionDetail(name: string): Promise<Champion> {
  const res = await fetch(`${championDetailApi}/${name}.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(` ${name}의 세부 정보를 가져오지 못했습니다.`);
  }

  const data = await res.json();
  const champion = data.data;

  return champion;
}
