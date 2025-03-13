import { PlanCard } from "../components/ui/plan-card";

function Home() {
  return (
    <div className="flex flex-col items-center py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 lol-gradient-text">
          League of Legend 정보 앱
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto px-4">
          이 앱은 League of Legend 게임 정보를 제공합니다.
          <br /> 아래 카드를 통해 원하는 정보를 확인하세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full px-4">
        <PlanCard
          title="챔피언 정보"
          description=" 모든 챔피언의 상세 정보와 스킬, 스킨 등을 확인하세요."
          channel="/champions"
        />

        <PlanCard
          title="로테이션 챔피언"
          description="이번 주 무료 로테이션 챔피언을 확인하고 새로운 챔피언을
            경험해보세요."
          channel="/rotation"
        />

        <PlanCard
          title="아이템 정보"
          description="게임 내 모든 아이템의 효과와 가격을 확인하세요."
          channel="/items"
        />
      </div>
    </div>
  );
}

export default Home;
