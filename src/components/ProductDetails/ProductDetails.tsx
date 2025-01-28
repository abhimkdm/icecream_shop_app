import { useParams } from "react-router-dom";

const ProductDetails: React.FC = (props) => {
    const { productId } = useParams();
    return <>
      Product Details For ProductID : { productId }
    </>
}

export default ProductDetails;