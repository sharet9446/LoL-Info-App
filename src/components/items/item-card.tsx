import { Item } from "@/types/item";
import Image from "next/image";
import { LOL_API_ADDRESS, LOL_VER } from "@/constants/lol-api";
import { getStatName } from "@/utils/translation";

function ItemCard({ item }: { item: Item }) {
  return (
    item.gold.purchasable && (
      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-blue-600 transition-colors">
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
            <Image
              width={64}
              height={64}
              src={`${LOL_API_ADDRESS}/${LOL_VER}/img/item/${item.image.full}`}
              alt={item.name}
              className="w-16 h-16 rounded border border-gray-700 bg-gray-800"
            />

            {/* 아이템 설명 */}
            <div className="flex-1">
              <p className="text-sm text-gray-300 mb-2">
                {item.plaintext || "설명 없음"}
              </p>

              {/* 아이템 스탯 */}
              <div className="space-y-1">
                {item.stats &&
                  Object.entries(item.stats).map(([key, value]) => (
                    <div key={key} className="flex items-center text-sm">
                      <span className="text-gray-400">{getStatName(key)}:</span>
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
  );
}

export default ItemCard;
