// import { fetchChampionDetail } from "@/app/apis/champion.api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LOL_API_ADDRESS } from "@/constants/lol-api";
// import { ChampionDetailProps } from "@/types/champion";
import { translationTagName } from "@/utils/translation";
// import { Metadata } from "next";
import Image from "next/image";
import React from "react";

// export async function generateMetadata({
//   params,
// }: ChampionDetailProps): Promise<Metadata> {
//   const championName = params.id;
//   const championDetail = await fetchChampionDetail(championName);

//   return {
//     title: `${championDetail[championName].name} - 챔피언 상세 정보`,
//     description: championDetail[championName].title,
//   };
// }

async function ChampionDetailPage() {
  // const championDetail = await fetchChampionDetail("Janna");
  // const championDetailArray = Object.values(championDetail);
  // const champion = championDetailArray[0];

  const champion = {
    id: "Aatrox",
    key: "266",
    name: "아트록스",
    title: "다르킨의 검",
    image: {
      full: "Aatrox.png",
      sprite: "champion0.png",
      group: "champion",
      x: 0,
      y: 0,
      w: 48,
      h: 48,
    },
    skins: [
      {
        id: "266000",
        num: 0,
        name: "default",
        chromas: false,
      },
      {
        id: "266001",
        num: 1,
        name: "정의의 아트록스",
        chromas: false,
      },
      {
        id: "266002",
        num: 2,
        name: "메카 아트록스",
        chromas: true,
      },
      {
        id: "266003",
        num: 3,
        name: "바다 사냥꾼 아트록스",
        chromas: false,
      },
      {
        id: "266007",
        num: 7,
        name: "핏빛달 아트록스",
        chromas: false,
      },
      {
        id: "266008",
        num: 8,
        name: "프레스티지 핏빛달 아트록스",
        chromas: false,
      },
      {
        id: "266009",
        num: 9,
        name: "승리의 아트록스",
        chromas: true,
      },
      {
        id: "266011",
        num: 11,
        name: "오디세이 아트록스",
        chromas: true,
      },
      {
        id: "266020",
        num: 20,
        name: "프레스티지 핏빛달 아트록스 (2022)",
        chromas: false,
      },
      {
        id: "266021",
        num: 21,
        name: "달을 삼킨 아트록스",
        chromas: true,
      },
      {
        id: "266030",
        num: 30,
        name: "DRX 아트록스",
        chromas: true,
      },
      {
        id: "266031",
        num: 31,
        name: "프레스티지 DRX 아트록스",
        chromas: false,
      },
      {
        id: "266033",
        num: 33,
        name: "태고족 아트록스",
        chromas: true,
      },
    ],
    lore: "한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를 열망한다.",
    blurb:
      "한때는 공허에 맞서 싸웠던 슈리마의 명예로운 수호자 아트록스와 그의 종족은 결국 공허보다 위험한 존재가 되어 룬테라의 존속을 위협했지만, 교활한 필멸자의 마법에 속아넘어가 패배하게 되었다. 수백 년에 걸친 봉인 끝에, 아트록스는 자신의 정기가 깃든 마법 무기를 휘두르는 어리석은 자들을 타락시키고 육신을 바꾸는 것으로 다시 한번 자유의 길을 찾아내었다. 이제 이전의 잔혹한 모습을 닮은 육체를 차지한 아트록스는 세상의 종말과 오랫동안 기다려온 복수를...",
    allytips: [
      "공격 성공률을 높이려면 다르킨의 검을 사용하는 동안 파멸의 돌진을 사용하세요.",
      "지옥사슬 같은 군중 제어 스킬이나 아군의 이동 불가 효과를 통해 다르킨의 검을 쉽게 적중시킬 수 있습니다.",
      "전투를 시작할 준비가 되면 세계의 종결자를 사용하세요.",
    ],
    enemytips: [
      "아트록스의 공격은 미리 표시되므로 공격이 예상되는 지역에서 벗어나세요.",
      "아트록스를 향해 이동하거나 양옆으로 이동하면 지옥사슬에서 더 쉽게 벗어날 수 있습니다.",
      "아트록스가 궁극기를 사용하면 부활하지 못하도록 거리를 유지하세요.",
    ],
    tags: ["Fighter"],
    partype: "피의 샘",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4,
    },
    stats: {
      hp: 650,
      hpperlevel: 114,
      mp: 0,
      mpperlevel: 0,
      movespeed: 345,
      armor: 38,
      armorperlevel: 4.8,
      spellblock: 32,
      spellblockperlevel: 2.05,
      attackrange: 175,
      hpregen: 3,
      hpregenperlevel: 0.5,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 60,
      attackdamageperlevel: 5,
      attackspeedperlevel: 2.5,
      attackspeed: 0.651,
    },
    spells: [
      {
        id: "AatroxQ",
        name: "다르킨의 검",
        description:
          "아트록스가 대검을 내리쳐 물리 피해를 줍니다. 세 번까지 휘두를 수 있으며 각 공격은 피해 범위가 다릅니다.",
        tooltip:
          "아트록스가 대검을 내리쳐 <physicalDamage>{{ qdamage }}의 물리 피해</physicalDamage>를 입힙니다. 끝에 적중한 적을 잠깐 <status>공중으로 띄워 올리고</status> <physicalDamage>{{ qedgedamage }}</physicalDamage>의 피해를 입힙니다. 이 스킬은 두 번 <recast>재사용</recast>할 수 있으며 다시 사용할 때마다 범위 모양이 변하고 이전보다 25% 더 많은 피해를 입힙니다.{{ spellmodifierdescriptionappend }}",
        leveltip: {
          label: ["재사용 대기시간", "피해량", "총 공격력 %"],
          effect: [
            "{{ cooldown }} -> {{ cooldownNL }}",
            "{{ qbasedamage }} -> {{ qbasedamageNL }}",
            "{{ qtotaladratio*100.000000 }}% -> {{ qtotaladrationl*100.000000 }}%",
          ],
        },
        maxrank: 5,
        cooldown: [14, 12, 10, 8, 6],
        cooldownBurn: "14/12/10/8/6",
        cost: [0, 0, 0, 0, 0],
        costBurn: "0",
        datavalues: {},
        effect: [
          null,
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: "소모값 없음",
        maxammo: "-1",
        range: [25000, 25000, 25000, 25000, 25000],
        rangeBurn: "25000",
        image: {
          full: "AatroxQ.png",
          sprite: "spell0.png",
          group: "spell",
          x: 384,
          y: 48,
          w: 48,
          h: 48,
        },
        resource: "소모값 없음",
      },
      {
        id: "AatroxW",
        name: "지옥사슬",
        description:
          "아트록스가 지면을 내리쳐 처음 맞힌 적에게 피해를 줍니다. 대상이 챔피언 또는 대형 몬스터인 경우 일정 시간 안에 해당 지역을 벗어나지 않으면 중앙으로 끌려가 다시 피해를 받습니다.",
        tooltip:
          "아트록스가 사슬을 발사하여 처음 적중한 적을 {{ wslowduration }}초 동안 {{ wslowpercentage*-100 }}%만큼 <status>둔화</status>시키고 <magicDamage>{{ wdamage }}의 마법 피해</magicDamage>를 입힙니다. 챔피언과 대형 정글 몬스터는 {{ wslowduration }}초 안에 해당 지역을 벗어나지 않으면 중심으로 <status>끌려가</status> 다시 같은 양의 피해를 입습니다.{{ spellmodifierdescriptionappend }}",
        leveltip: {
          label: ["재사용 대기시간", "피해량", "둔화"],
          effect: [
            "{{ cooldown }} -> {{ cooldownNL }}",
            "{{ wbasedamage }} -> {{ wbasedamageNL }}",
            "{{ wslowpercentage*-100.000000 }}% -> {{ wslowpercentagenl*-100.000000 }}%",
          ],
        },
        maxrank: 5,
        cooldown: [20, 18, 16, 14, 12],
        cooldownBurn: "20/18/16/14/12",
        cost: [0, 0, 0, 0, 0],
        costBurn: "0",
        datavalues: {},
        effect: [
          null,
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: "소모값 없음",
        maxammo: "-1",
        range: [825, 825, 825, 825, 825],
        rangeBurn: "825",
        image: {
          full: "AatroxW.png",
          sprite: "spell0.png",
          group: "spell",
          x: 432,
          y: 48,
          w: 48,
          h: 48,
        },
        resource: "소모값 없음",
      },
      {
        id: "AatroxE",
        name: "파멸의 돌진",
        description:
          "기본 지속 효과로 아트록스가 적 챔피언에게 피해를 입히면 체력을 회복합니다. 사용 시, 아트록스가 지정한 방향으로 돌진합니다.",
        tooltip:
          "<spellPassive>기본 지속 효과:</spellPassive> 아트록스가 챔피언에게 가한 피해의 <lifeSteal>{{ totalevamp }}</lifeSteal>만큼 체력을 회복합니다.<br /><br /><spellActive>사용 시:</spellActive> 아트록스가 돌진합니다. 이 스킬은 다른 스킬이 진행되는 동안 사용할 수 있습니다.{{ spellmodifierdescriptionappend }}",
        leveltip: {
          label: ["재사용 대기시간"],
          effect: ["{{ cooldown }} -> {{ cooldownNL }}"],
        },
        maxrank: 5,
        cooldown: [9, 8, 7, 6, 5],
        cooldownBurn: "9/8/7/6/5",
        cost: [0, 0, 0, 0, 0],
        costBurn: "0",
        datavalues: {},
        effect: [
          null,
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: "소모값 없음",
        maxammo: "-1",
        range: [25000, 25000, 25000, 25000, 25000],
        rangeBurn: "25000",
        image: {
          full: "AatroxE.png",
          sprite: "spell0.png",
          group: "spell",
          x: 0,
          y: 96,
          w: 48,
          h: 48,
        },
        resource: "소모값 없음",
      },
      {
        id: "AatroxR",
        name: "세계의 종결자",
        description:
          "아트록스가 악마의 힘을 해방하여 근처 적 미니언에게 공포를 주고 자신의 공격력과 체력 회복량, 이동 속도가 증가합니다. 아트록스가 챔피언 처치에 관여하면 이 효과의 지속시간이 연장됩니다.",
        tooltip:
          "아트록스가 진정한 악마의 모습을 드러내 근처 미니언이 {{ rminionfearduration }}초 동안 <status>공포</status>에 떨게 하고 <speed>이동 속도가 {{ rmovementspeedbonus*100 }}%</speed> 증가했다가 {{ rduration }}초에 걸쳐 원래대로 돌아옵니다. 지속시간 동안 <scaleAD>공격력이 {{ rtotaladamp*100 }}%</scaleAD>, <healing>자신에 대한 체력 회복 효과가 {{ rhealingamp*100 }}%</healing> 증가합니다.<br /><br />챔피언 처치 관여 시 이 효과의 지속시간이 {{ rextension }}초 늘어나고 <speed>이동 속도</speed> 효과가 초기화됩니다.{{ spellmodifierdescriptionappend }}",
        leveltip: {
          label: [
            "총 공격력 증가",
            "회복량 증가",
            "이동 속도",
            "재사용 대기시간",
          ],
          effect: [
            "{{ rtotaladamp*100.000000 }}% -> {{ rtotaladampnl*100.000000 }}%",
            "{{ rhealingamp*100.000000 }}% -> {{ rhealingampnl*100.000000 }}%",
            "{{ rmovementspeedbonus*100.000000 }}% -> {{ rmovementspeedbonusnl*100.000000 }}%",
            "{{ cooldown }} -> {{ cooldownNL }}",
          ],
        },
        maxrank: 3,
        cooldown: [120, 100, 80],
        cooldownBurn: "120/100/80",
        cost: [0, 0, 0],
        costBurn: "0",
        datavalues: {},
        effect: [
          null,
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        effectBurn: [null, "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
        vars: [],
        costType: "소모값 없음",
        maxammo: "-1",
        range: [25000, 25000, 25000],
        rangeBurn: "25000",
        image: {
          full: "AatroxR.png",
          sprite: "spell0.png",
          group: "spell",
          x: 48,
          y: 96,
          w: 48,
          h: 48,
        },
        resource: "소모값 없음",
      },
    ],
    passive: {
      name: "사신 태세",
      description:
        "주기적으로 아트록스의 기본 공격이 대상 최대 체력에 비례하여 추가 <physicalDamage>물리 피해</physicalDamage>를 입히고 자신의 체력을 회복합니다. ",
      image: {
        full: "Aatrox_Passive.png",
        sprite: "passive0.png",
        group: "passive",
        x: 0,
        y: 0,
        w: 48,
        h: 48,
      },
    },
    recommended: [],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-fade-in">
      {/* 헤더 섹션 - 챔피언 기본 정보 */}
      <div className="relative mb-12">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 overflow-hidden rounded-xl h-64 -z-10">
          <Image
            src={`${LOL_API_ADDRESS}/img/champion/splash/${champion.id}_0.jpg`}
            alt={champion.name}
            fill
            className="object-cover opacity-20 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>

        {/* 챔피언 정보 */}
        <div className="pt-8 pb-4 flex flex-col md:flex-row items-center md:items-end gap-6">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src={`${LOL_API_ADDRESS}/15.5.1/img/champion/${champion.image.full}`}
              alt={champion.name}
              width={160}
              height={160}
              className="rounded-full border-4 border-blue-600 shadow-lg shadow-blue-500/20"
            />
          </div>

          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
              <h1 className="text-4xl md:text-5xl font-bold lol-gradient-text">
                {champion.name}
              </h1>
              <p className="text-xl text-gray-400 italic">{champion.title}</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
              {champion.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-900/40 text-blue-200 rounded-full text-sm border border-blue-800/40"
                >
                  {translationTagName(tag)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 챔피언 정보 탭 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* 기본 정보 */}
        <div className="bg-gray-900/70 rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors">
          <h2 className="text-xl font-bold mb-4 text-white">챔피언 정보</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {champion.lore || "정보가 없습니다."}
          </p>

          <h3 className="text-lg font-semibold mb-3 text-blue-300">
            기본 능력치
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="text-gray-400">체력</span>
              <span className="text-white">{champion.stats.hp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">마나</span>
              <span className="text-white">{champion.stats.mp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">방어력</span>
              <span className="text-white">{champion.stats.armor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">마법 저항력</span>
              <span className="text-white">{champion.stats.spellblock}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">공격력</span>
              <span className="text-white">{champion.stats.attackdamage}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">공격 속도</span>
              <span className="text-white">{champion.stats.attackspeed}</span>
            </div>
          </div>
        </div>

        {/* 스킬 정보 (패시브 + 챔피언 스킬) */}
        <div className="bg-gray-900/70 rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors">
          <h2 className="text-xl font-bold mb-4 text-white">챔피언 스킬</h2>

          {/* 패시브 스킬 */}
          <div className="mb-6">
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0 relative">
                <Image
                  src={`${LOL_API_ADDRESS}/15.5.1/img/passive/${champion.passive.image.full}`}
                  alt={champion.passive.name}
                  width={48}
                  height={48}
                  className="rounded-lg border border-blue-800/50"
                />
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-xs font-bold border border-blue-700">
                  P
                </div>
              </div>
              <div>
                <h3 className="text-md font-semibold text-blue-300">
                  {champion.passive.name} (패시브)
                </h3>
                <p className="text-gray-300 text-xs">
                  {champion.passive.description}
                </p>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-t border-gray-800 my-4"></div>

          {/* 챔피언 스킬 */}
          <div className="space-y-4">
            {champion.spells.map((spell, index) => (
              <div key={spell.id} className="flex gap-3 items-start">
                <div className="flex-shrink-0 relative">
                  <Image
                    src={`${LOL_API_ADDRESS}/15.5.1/img/spell/${spell.image.full}`}
                    alt={spell.name}
                    width={48}
                    height={48}
                    className="rounded-lg border border-blue-800/50"
                  />
                  <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-xs font-bold border border-blue-700">
                    {["Q", "W", "E", "R"][index]}
                  </div>
                </div>
                <div>
                  <h3 className="text-md font-semibold text-blue-300">
                    {spell.name}
                  </h3>
                  <p className="text-gray-300 text-xs">{spell.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 스킨 캐러셀 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">챔피언 스킨</h2>
        <Carousel className="w-full">
          <CarouselContent>
            {champion.skins.map((skin) => (
              <CarouselItem
                key={skin.id}
                className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-1"
              >
                <div className="bg-gray-900/70 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      width={800}
                      height={400}
                      src={`${LOL_API_ADDRESS}/img/champion/splash/${champion.id}_${skin.num}.jpg`}
                      alt={skin.name === "default" ? champion.name : skin.name}
                      loading="lazy"
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {skin.name === "default" ? champion.name : skin.name}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-blue-900/80 border-blue-700 hover:bg-blue-800" />
          <CarouselNext className="right-2 bg-blue-900/80 border-blue-700 hover:bg-blue-800" />
        </Carousel>
      </div>
    </div>
  );
}

export default ChampionDetailPage;
