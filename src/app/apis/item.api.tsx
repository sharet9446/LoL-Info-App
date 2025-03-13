import { Item } from "@/types/item";

// 아이템 데이터 가져오기
export async function fetchItems() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    { cache: "force-cache" }
  );
  const data = await res.json();
  const items = data.data as Record<string, Item>;

  return items;
}
