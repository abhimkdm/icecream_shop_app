import { ProductType } from "./ProductType";

export interface CartItemType {
    product: ProductType;
    cartQuantity: number;
  }