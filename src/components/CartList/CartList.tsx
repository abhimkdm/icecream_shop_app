import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartCard from "../CartCard/CartCard";
import Grid from "@mui/material/Grid2";
import { ProductType } from "../../types/ProductType";
import { Divider, Paper, styled, Typography } from "@mui/material";

const CartList: React.FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  const cartListItems = useSelector((state: RootState) => state.cart.items);

  const calCulatePrice = (sum: number, item: ProductType) => {
    return sum + item.price * item.cartQuantity;
  };

  //Calculate Length
  const totalCount = cartListItems.length;
  const totalPrice = cartListItems.reduce(calCulatePrice, 0);

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 5, md: 7 }}>
          {/* <Item> */}
            <Typography gutterBottom variant="h5" component="div">
              {totalCount} item{totalCount > 1 ? "s" : ""}
            </Typography>

            {cartListItems?.map((product: ProductType) => {
              return (
                <>
                  <CartCard key={product.id} product={product} />
                </>
              );
            })}

          {/* </Item> */}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid size={{ xs: 6, md: 4 }}>
          {/* <Item> */}
            <Typography gutterBottom variant="h5" component="div">
              Total Price : {totalPrice}
            </Typography>
          {/* </Item> */}
        </Grid>
      </Grid>
    </>
  );
};

export default CartList;
