export type Item = {
  id: string;
  name: string;
  plaintext: string;
  description: string;
  gold: {
    total: number;
    purchasable: boolean;
  };
  image: {
    full: string;
  };
  stats: {
    FlatHPPoolMod: number;
    FlatMPPoolMod: number;
    FlatHPRegenMod: number;
    FlatMPRegenMod: number;
    FlatArmorMod: number;
    FlatPhysicalDamageMod: number;
    FlatMagicDamageMod: number;
    FlatMovementSpeedMod: number;
    FlatCritChanceMod: number;
    FlatSpellBlockMod: number;
    PercentMovementSpeedMod: number;
    PercentAttackSpeedMod: number;
    PercentLifeStealMod: number;
    PercentCritDamageMod: number;
    PercentSpellVampMod: number;
    PercentArmorPenetrationMod: number;
    PercentMagicPenetrationMod: number;
    FlatArmorPenetrationMod: number;
    FlatMagicPenetrationMod: number;
    FlatCritDamageMod: number;
    FlatEnergyPoolMod: number;
    FlatEnergyRegenMod: number;
    FlatEXPBonus: number;
    FlatGoldPer10Mod: number;
  };
};
