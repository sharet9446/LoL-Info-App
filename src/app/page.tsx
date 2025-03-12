import {
  PlanCard,
  PlanCardTitle,
  PlanCardDescription,
  PlanCardLink,
} from "../components/ui/plan-card";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-white mb-6">
        League of Legend 정보 앱
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mb-8">
        이 앱은 League of Legend 게임 정보를 제공합니다. 아래 버튼을 눌러 원하는
        정보를 확인하세요.
      </p>

      {/* 간단한 기능 설명 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full">
        <PlanCard>
          <PlanCardTitle>챔피언 정보</PlanCardTitle>
          <PlanCardDescription>
            모든 챔피언의 상세 정보와 스킬, 스킨 등을 확인하세요.
          </PlanCardDescription>
          <PlanCardLink channel={"/champions"} />
        </PlanCard>

        <PlanCard>
          <PlanCardTitle>로테이션 챔피언</PlanCardTitle>
          <PlanCardDescription>
            이번 주 무료 로테이션 챔피언을 확인하고 새로운 챔피언을
            경험해보세요.
          </PlanCardDescription>
          <PlanCardLink channel={"/rotation"} />
        </PlanCard>

        <PlanCard>
          <PlanCardTitle>아이템 정보</PlanCardTitle>
          <PlanCardDescription>
            게임 내 모든 아이템의 효과와 가격, 빌드 경로를 확인하세요.
          </PlanCardDescription>
          <PlanCardLink channel={"/items"} />
        </PlanCard>
      </div>
    </div>
  );
}
