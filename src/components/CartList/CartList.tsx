import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartCard from "../CartCard/CartCard";
import Grid from "@mui/material/Grid2";
import { ProductType } from "../../types/ProductType";
import { Typography } from "@mui/material";

const CartList: React.FC = () => {
  const cartListItems = useSelector((state: RootState) => state.cart.items);

  const calCulatePrice = (sum: number, item: ProductType) => {
    return sum + item.price;
  };

  //Calculate Length
  const totalCount = cartListItems.length;
  const totalPrice = cartListItems.reduce(calCulatePrice, 0);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {totalCount} item{totalCount > 1 ? "s" : ""}
        </Typography>
        {cartListItems?.map((product) => {
          return (
            <>
              <CartCard key={product.id} product={product} />
            </>
          );
        })}
         <Typography gutterBottom variant="h5" component="div">
          Total Price :  {totalPrice} 
        </Typography>

      </Grid>
    </>
  );
};

export default CartList;
