import { Button, Card, CardContent, Typography } from "@mui/material";
import { ProductType } from "../../types/ProductType";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addToCart } from "../../store/CartSlice";

interface Props {
    product: ProductType;
}

const ProductCard: React.FC<Props> =({ product })=> {

    const dispatch = useDispatch<AppDispatch>();

    const handleAddToCart = () => {
        //1. dispatch the Add to Cart Action
        //console.log(product);
        dispatch(addToCart(product));
    }
    return <>
            <Card>
                <CardContent>
                    <Typography>{product.title}</Typography>
                    <Typography>{product.price}</Typography>
                    <Button onClick={handleAddToCart}>Add To Cart</Button>
                </CardContent>
            </Card>
        </>
} 

export default ProductCard;