// 스탯 이름을 한글로 변환
export function translationStatName(statKey: string): string {
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

  return statNames[statKey];
}

// 역할 이름을 한글로 변환
export function translationTagName(tagsKey: string): string {
  const tagNames: Record<string, string> = {
    Assassin: "암살자",
    Fighter: "전사",
    Mage: "마법사",
    Marksman: "원거리 딜러",
    Support: "서포터",
    Tank: "탱커",
  };

  return tagNames[tagsKey];
}
