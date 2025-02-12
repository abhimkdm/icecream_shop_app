import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Card, CardContent, Typography } from "@mui/material";

const CartList: React.FC = () => {
  const cartListItems = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      {cartListItems?.map((product) => {
        return (
          <>
            <Card>
              <CardContent>
                <Typography>{product.title}</Typography>
                <Typography>{product.price}</Typography>
              </CardContent>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default CartList;
