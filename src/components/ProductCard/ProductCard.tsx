import { Card, CardContent, Typography } from "@mui/material";
import { ProductType } from "../../types/ProductType";

interface Props {
    product: ProductType;
}

const ProductCard: React.FC<Props> =({ product })=> {
    return <>
            <Card>
                <CardContent>
                    <Typography>{product.title}</Typography>
                    <Typography>{product.price}</Typography>
                    <Typography>Add To Cart</Typography>
                </CardContent>
            </Card>
        </>
} 

export default ProductCard;