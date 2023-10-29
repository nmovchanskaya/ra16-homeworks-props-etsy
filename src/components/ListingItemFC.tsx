import type { ListingItem } from "./ListingItem";

export const ListingItemFC = ({
        listing_id, url, MainImage, title, price, currency_code, quantity
    } : ListingItem) => {
  let img = MainImage || {url_570xN: ""};

  let titleShort;
  title = title || "";
  if (title.length > 50) {
    titleShort = title.substring(0, 50) + '...';
  }
  else {
    titleShort = title;
  }

  let priceFull;
  price = price || "";
  currency_code = currency_code || "";
  if (currency_code === 'USD' || currency_code === 'EUR') {
    priceFull = '$' + price;
  }
  else if (currency_code === 'EUR') {
    priceFull = '€' + price;
  }
  else {
    priceFull = price + currency_code;
  }

  let classQuant;
  quantity = quantity || 0;
  if (quantity <= 10) {
    classQuant = 'level-low';
  }
  else if (quantity <= 20) {
    classQuant = 'level-medium';
  }
  else {
    classQuant = 'level-high';
  }

  return (
    <div className="item" key={listing_id}>
        <div className="item-image">
            <a href={url}>
                <img src={img.url_570xN}/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{titleShort}</p>
            <p className="item-price">{priceFull}</p>
            <p className={"item-quantity " + classQuant}>{quantity} left</p>
        </div>
    </div>
  )
}

// Вывести остаток, подсветив его в зависимости от количества, используя класс level-*:

// level-low — если остаток меньше 10 включительно;
// level-medium — если остаток меньше 20 включительно;
// level-high — если остаток больше 20.
