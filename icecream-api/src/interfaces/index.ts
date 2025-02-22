export interface IProduct {
  id: number;
  title: string;
  price: number;
  type: string;
}

export interface ICartItem {
  id: number;
  product: IProduct;
  cartQuantity: number;
}

export interface IShippingDetails {
    id: number;
    name: string;
    address: string;
    country: string;
    state: string;
    city: string;
    pincode: number; 
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    mobileno: number
}

export interface IOrder {
    id: number;
    cartItems: ICartItem[];
    user: IUser;
    shippingDetails: IShippingDetails;
    orderDate: string;
    status: string;
    totalPrice: number;
}