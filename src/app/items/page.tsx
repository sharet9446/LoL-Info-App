import { Item } from "@/types/item";

// 스탯 이름을 한글로 변환하는 함수를 수정합니다.
function getStatName(statKey: string): string {
  const statNames: Record<string, string> = {
    FlatHPPoolMod: "체력",
    FlatMPPoolMod: "마나",
    FlatHPRegenMod: "체력 재생",
    FlatMPRegenMod: "마나 재생",
    FlatArmorMod: "방어력",
    FlatPhysicalDamageMod: "공격력",
    FlatMagicDamageMod: "주문력",
    FlatMovementSpeedMod: "이동 속도",
    FlatCritChanceMod: "치명타 확률",
    FlatSpellBlockMod: "마법 저항력",
    PercentMovementSpeedMod: "이동 속도",
    PercentAttackSpeedMod: "공격 속도",
    PercentLifeStealMod: "생명력 흡수",
    PercentCritDamageMod: "치명타 피해",
    PercentSpellVampMod: "주문 흡혈",
    PercentArmorPenetrationMod: "방어구 관통",
    PercentMagicPenetrationMod: "마법 관통",
    FlatArmorPenetrationMod: "방어구 관통",
    FlatMagicPenetrationMod: "마법 관통",
    FlatCritDamageMod: "치명타 피해",
    FlatEnergyPoolMod: "기력",
    FlatEnergyRegenMod: "기력 재생",
    FlatEXPBonus: "경험치 보너스",
    FlatGoldPer10Mod: "10초당 골드",
  };

  return statNames[statKey] || "기타 능력치";
}

const ItemPage = async () => {
  // 아이템 데이터 가져오기
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const data = await res.json();
  const items = data.data as Record<string, Item>;

  return (
    <div className="p-4">
      {/* 페이지 제목 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">아이템 목록</h1>
        <p className="text-gray-400">
          리그 오브 레전드의 모든 아이템을 확인하세요.
        </p>
      </div>

      {/* 아이템 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.values(items).map(
          (item: Item) =>
            item.gold.purchasable && (
              <div
                key={item.id}
                className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-blue-600 transition-colors"
              >
                {/* 아이템 헤더 */}
                <div className="flex justify-between items-center p-3 bg-gray-800">
                  <h3 className="font-bold text-white truncate">{item.name}</h3>
                  {item.gold && (
                    <div className="flex items-center text-yellow-400 text-sm">
                      <span>{item.gold.total}</span>
                      <span className="ml-1 text-xs">G</span>
                    </div>
                  )}
                </div>

                {/* 아이템 내용 */}
                <div className="p-4">
                  <div className="flex gap-4">
                    {/* 아이템 이미지 */}
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
                      alt={item.name}
                      className="w-16 h-16 rounded border border-gray-700 bg-gray-800"
                    />

                    {/* 아이템 설명 */}
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 mb-2">
                        {item.plaintext || item.description || "설명 없음"}
                      </p>

                      {/* 아이템 스탯 */}
                      <div className="space-y-1">
                        {item.stats &&
                          Object.entries(item.stats).map(([key, value]) => (
                            <div
                              key={key}
                              className="flex items-center text-sm"
                            >
                              <span className="text-gray-400">
                                {getStatName(key)}:
                              </span>
                              <span className="ml-1 text-blue-400">
                                {key.includes("Percent")
                                  ? `${((value as number) * 100).toFixed(0)}%`
                                  : value}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ItemPage;
