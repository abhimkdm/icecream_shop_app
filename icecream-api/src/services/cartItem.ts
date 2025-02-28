import { ICartItem } from "../interfaces";

const readitems = (cartitem: ICartItem) => {
    const cartItem : ICartItem = cartitem as ICartItem;
    return cartItem;
}

exports.getCartItems = (cartItem: ICartItem)=> {
    return readitems(cartItem);
}

