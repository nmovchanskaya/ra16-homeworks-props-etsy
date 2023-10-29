import { ListingItemFC } from "./ListingItemFC";
import type { ListingItem } from "./ListingItem";

export const ListingFC = (items: ListingItem[]) => {
  let itemsArr = [];
  for (const prop in items) {
    itemsArr.push(items[prop]);
  }
  const elems = itemsArr.map((item) => {
    return <ListingItemFC {...item}/>
  });
  return (
    <div className="item-list">
        {elems}
    </div>
  )
}
