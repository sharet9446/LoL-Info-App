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
    FlatHPPoolMod?: number;
    FlatMPPoolMod?: number;
    FlatArmorMod?: number;
    FlatPhysicalDamageMod?: number;
    FlatMagicDamageMod?: number;
    FlatSpellBlockMod?: number;
    [key: string]: number | undefined;
  };
};
