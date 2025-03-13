import { LANGUAGE, LOL_API_ADDRESS, LOL_VER } from "@/constants/lol-api";
import { Item } from "@/types/item";

const itemApi = `${LOL_API_ADDRESS}/${LOL_VER}/data/${LANGUAGE}/item.json`;

// 아이템 데이터 가져오기
export async function fetchItems() {
  const res = await fetch(itemApi, { cache: "force-cache" });
  const data = await res.json();
  const items = data.data as Record<string, Item>;

  return items;
}
