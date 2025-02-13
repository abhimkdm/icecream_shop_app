import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid2, Link, Paper, styled, Typography } from "@mui/material";
import { ProductType } from "../../types/ProductType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addToCart } from "../../store/CartSlice";
import { useSnackbar } from "notistack";

interface Props {
    product: ProductType;
}

const ProductCard: React.FC<Props> = ({ product }) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    const dispatch = useDispatch<AppDispatch>();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()

    const handleAddToCart = () => {
        //1. dispatch the Add to Cart Action
        //console.log(product);
        dispatch(addToCart(product));
        enqueueSnackbar('Product Is Added To Cart...!');
    }
    return <>

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={require('../../assets/images/Icecream.jpg')}
                    alt="green iguana"
                />

                <CardContent>
                    {/* <Link to={`/products/${product.id}`}> */}
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    {/* </Link> */}
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                        Price: {product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant="contained" onClick={handleAddToCart}>
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    </>
}

export default ProductCard;