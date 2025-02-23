import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { RootState } from "../../store/store";
import Grid from '@mui/material/Grid2';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);

  //console.log(products);

  return (
    <>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} ></ProductCard>;
        })}
      </Grid>
    </>
  );
};

export default ProductList;
