import ProductCard from "../ProductCard/ProductCard";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/ProductsSlice";
import { CircularProgress, Typography } from "@mui/material";

const ProductList: React.FC = () => {
  const { items, loading, error } = useAppSelector((state) => state.products);
  const disapatch = useAppDispatch();
  console.log("Loading", loading);
  console.log("Error", error);
  useEffect(() => {
    disapatch(fetchProducts());
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const productData = await api.get("/products");
  //     console.table(productData.data);
  //     //disapatch the products to store in statemanagement. API1 user API 2 shipping
  //   };

  //   fetchProducts();
  // }, []);

  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);

  //some function increasing val setCount(1);

  //componentDidMount
  // Loaded
  // useEffect(() => {}); //Called Rerender component - useState();
  // useEffect(() => {}, []); //Called only once component is mounted

  //componentDidUpdate
  // useEffect(() => {
  //   /*logic*/
  //   console.log("Logic");
  // }, [count, count1]);

  //getSnapshotBeforeUpdate
  // useEffect(()=>{
  //   (prevProps, prevState) => {
  //       //count =0
  //       //count = 1
  //   }
  // })

  //console.log(products);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {items?.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </Grid>
      {loading ? <CircularProgress></CircularProgress> : ""}
      {error ? <Typography> {error} </Typography> : ""}
    </>
  );
};

export default ProductList;
