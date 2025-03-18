"use client";

import { fetchChampions } from "@/app/apis/champion.api";
import { ChampionCard } from "@/components/champions/champion-card";
import { Grid, PageHeader } from "@/components/ui/grid";
import type { RotationChampionIds } from "@/types/champion";
import { useQuery } from "@tanstack/react-query";

function RotationPage() {
  const {
    data: rotations,
    isPending: isRotationPending,
    isError: isRotationError,
  } = useQuery({
    queryKey: ["rotation"],
    queryFn: async () => {
      const response = await fetch("https://lo-l-info-app.vercel.app/apis/api");
      if (!response.ok) {
        throw new Error("로테이션 데이터를 가져오는데 실패했습니다");
      }
      const { rotationChampions } = await response.json();
      return rotationChampions as RotationChampionIds;
    },
  });

  const {
    data: championsData,
    isPending: isChampionsPending,
    isError: isChampionsError,
  } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampions,
  });

  const isPending = isRotationPending || isChampionsPending;
  const isError = isRotationError || isChampionsError;

  // 챔피언 ID를 키로 변환하는 함수
  const getChampionByKey = (key: number) => {
    if (!championsData) return null;

    return Object.values(championsData).find(
      (champion) => Number.parseInt(champion.key) === key
    );
  };

  return (
    <div className="p-4 animate-fade-in">
      <PageHeader
        title="금주의 무료 로테이션 챔피언"
        description="이번 주에 무료로 플레이할 수 있는 챔피언 목록입니다."
      />

      {isPending && (
        <div className="flex justify-center items-center h-64 bg-gray-900/30 rounded-lg border border-gray-800">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400">
              로테이션 챔피언 정보를 불러오는 중...
            </p>
          </div>
        </div>
      )}

      {isError && (
        <div className="flex justify-center items-center h-64 bg-gray-900/30 rounded-lg border border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              데이터를 가져오는 데 실패했습니다.
            </p>
            <p className="text-sm text-gray-500">
              서버가 실행 중인지 확인해주세요.
            </p>
          </div>
        </div>
      )}

      {!isPending && !isError && rotations && rotations.length > 0 && (
        <>
          <div className="mb-4 text-sm text-gray-400">
            이번 주 무료 로테이션 챔피언 {rotations.length}개
          </div>

          <Grid columns={4} gap="md">
            {rotations.map((championKey) => {
              const champion = getChampionByKey(championKey);

              if (!champion) {
                return (
                  <div
                    key={championKey}
                    className="bg-gray-900/70 rounded-xl p-4 border border-gray-800"
                  >
                    <p className="text-gray-400">ID: {championKey}</p>
                    <p className="text-gray-500">
                      챔피언 정보를 찾을 수 없습니다.
                    </p>
                  </div>
                );
              }

              return <ChampionCard champion={champion} key={championKey} />;
            })}
          </Grid>
        </>
      )}

      {!isPending && !isError && (!rotations || rotations.length === 0) && (
        <div className="flex justify-center items-center h-64 bg-gray-900/30 rounded-lg border border-gray-800">
          <p className="text-gray-400">
            이번 주 무료 로테이션 챔피언이 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}

export default RotationPage;
