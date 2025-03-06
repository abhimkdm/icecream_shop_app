import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartCard from "../CartCard/CartCard";
import Grid from "@mui/material/Grid2";
import { Button, Divider, Typography } from "@mui/material";
import { CartItemType } from "../../types/CartItemType";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider/AuthProvider";
import { useMemo } from "react";

const CartList: React.FC = () => {
  const cartListItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const calCulatePrice = (sum: number, item: CartItemType) => {
    return sum + item.product.price * item.cartQuantity;
  };

  const handleRedirectToCheckOut = useMemo(() => {
    isAuthenticated ? navigate("/checkout") : navigate("/login");
  }, [isAuthenticated]);

  console.log("Cart List");

  //Calculate Length
  const totalCount = cartListItems.length;
  // useMemo(() => {
  //   console.log("Total Price");
   
  // }, [cartListItems]);
  const totalPrice = cartListItems.reduce(calCulatePrice, 0);

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 5, md: 7 }}>
          <Typography gutterBottom variant="h5" component="div">
            {totalCount} item{totalCount > 1 ? "s" : ""}
          </Typography>

          {cartListItems?.map((cartItem: CartItemType) => {
            return (
              <>
                <CartCard key={cartItem.product.id} cartItem={cartItem} />
              </>
            );
          })}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid size={{ xs: 6, md: 4 }}>
          <Typography gutterBottom variant="h5" component="div">
            Total Price : {totalPrice}
          </Typography>

          <Button variant="contained" onClick={() => handleRedirectToCheckOut}>
            Proceed to checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CartList;
