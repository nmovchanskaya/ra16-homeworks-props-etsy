import { ListingItemFC } from "./ListingItemFC";
import type { ListingItem } from "./ListingItem";

export const ListingFC = (props: {items: ListingItem[]}) => {
  const {items} = props;

  const elems = items.map((item) => {
    return <ListingItemFC {...item}/>
  });

  return (
    <div className="item-list">
        {elems}
    </div>
  )
}
