import { Button, ButtonGroup, CardMedia, Typography } from "@mui/material";
import { ProductType } from "../../types/ProductType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { decrementProductQty, incrementProductQty, removeFromCart } from "../../store/CartSlice";
import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";

interface Props {
  product: ProductType;
}

const CartCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
    enqueueSnackbar("Product Is Removed From Cart...!", { variant: "warning" });
  };

  const handleIncrementQty = () => { 
    dispatch(incrementProductQty(product));
  }

  const  handleDecrementQty = () => {
    dispatch(decrementProductQty(product));
  }

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", gap: 2, justifyItems: "center" }}>
          <Box sx={{ gridColumn: "span 4", display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              image={require(`../../assets/images/${product.type}.png`)}
              alt="green iguana"
              onClick={() => {
                //`/products/${product.id}`
              }}
              sx={{ }}
            />
          </Box>
          <Box sx={{ gridColumn: "span 8" }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography
              variant="button"
              gutterBottom
              sx={{ display: "block" }}
            >
              Price: {product.price}
            </Typography>
            <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{display: "block"}}>
              <Button onClick={handleDecrementQty} sx={{ borderRightColor : "currentColor"}}>-</Button>
              <Button variant="text" sx={{cursor: "default"}}>{product.cartQuantity}</Button>
              <Button onClick={handleIncrementQty}>+</Button>
            </ButtonGroup> <br/>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={handleRemove}
            >
              Remove
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CartCard;
