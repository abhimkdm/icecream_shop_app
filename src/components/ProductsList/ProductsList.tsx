import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { RootState } from "../../store/store";

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);

  console.log(products);

  return (
    <>
      {products?.map((product) => {
        return <ProductCard key={product.id} product={product} ></ProductCard>;
      })}
    </>
  );
};

export default ProductList;
