import { ImgType } from "./ImgType";

export interface ListingItem {
    listing_id: number,
    url?: string,
    MainImage?: ImgType,
    title?: string,
    currency_code?: string,
    price?: string,
    quantity?: number
}
