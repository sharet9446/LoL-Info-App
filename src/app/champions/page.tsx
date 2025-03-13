import { fetchChampions } from "@/app/apis/champion.api";
import { Grid, PageHeader } from "@/components/ui/grid";
import { ChampionCard } from "@/components/champions/champion-card";

export default async function ChampionsPage() {
  const champions = await fetchChampions();
  const championsArray = Object.values(champions);

  return (
    <div className="p-4">
      <PageHeader
        title="챔피언 목록"
        description="리그 오브 레전드의 모든 챔피언을 확인하세요."
      />

      <div className="mb-4 text-sm text-gray-400">
        총 {championsArray.length}명의 챔피언이 있습니다.
      </div>

      <Grid>
        {championsArray.map((champion) => (
          <ChampionCard key={champion.key} champion={champion} />
        ))}
      </Grid>
    </div>
  );
}
