export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  tags: string[];
};

export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
  };
  lore: string;
  tags: string[];
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  };
  spells: {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    image: { full: string };
  }[];
  passive: { name: string; description: string; image: { full: string } };
};
