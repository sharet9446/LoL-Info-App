import { fetchItems } from "../apis/item.api";

import { Grid, PageHeader } from "@/components/ui/grid";
import ItemCard from "@/components/items/item-card";

async function ItemPage() {
  const items = await fetchItems();
  const itemsArray = Object.values(items);

  return (
    <div className="p-4">
      <PageHeader
        title="아이템 목록"
        description="리그 오브 레전드의 모든 아이템을 확인하세요."
      />

      <Grid>
        {itemsArray.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
}

export default ItemPage;
