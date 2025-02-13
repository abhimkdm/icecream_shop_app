import { useParams } from "react-router-dom";

const ProductDetails: React.FC = (props) => {
    const { productId } = useParams();

    // Take Products Store 
    // Filter the Product
    // image, tilte, price, reviews, star, submit 
    return <>
      Product Details For ProductID : { productId }
    </>
}

export default ProductDetails;