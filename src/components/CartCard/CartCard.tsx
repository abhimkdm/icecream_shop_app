import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { ProductType } from "../../types/ProductType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { removeFromCart } from "../../store/CartSlice";
import { useSnackbar } from "notistack";

interface Props {
  product: ProductType;
}

const CartCard: React.FC<Props> = ({ product }) => {

  const dispatch = useDispatch<AppDispatch>();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
    enqueueSnackbar('Product Is Removed From Cart...!', { variant: "warning" });
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          image={require("../../assets/images/Icecream.jpg")}
          alt="green iguana"
          onClick={() => {
            //`/products/${product.id}`
          }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <Typography variant="button" gutterBottom sx={{ display: "block" }}>
            Price: {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant="contained" onClick={handleRemove}>
            Remove
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CartCard;
