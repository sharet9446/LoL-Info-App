import { LANGUAGE, LOL_API_ADDRESS, LOL_VER } from "@/constants/lol-api";
import { Champion } from "@/types/champion";

const championApi = `${LOL_API_ADDRESS}/${LOL_VER}/data/${LANGUAGE}/champion.json`;

// 챔피언 데이터 가져오기
export async function fetchChampions() {
  const res = await fetch(championApi, { next: { revalidate: 86400 } });
  const data = await res.json();
  const champions = data.data as Record<string, Champion>;

  return champions;
}
