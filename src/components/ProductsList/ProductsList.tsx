import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { RootState } from "../../store/store";
import Grid from "@mui/material/Grid2";
import { useEffect } from "react";
import api from "../../api/api";

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await api.get("/products");
      console.table(productData.data);
      //disapatch the products to store in statemanagement. API1 user API 2 shipping
    };

    fetchProducts();
  }, []);

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
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product}></ProductCard>;
        })}
      </Grid>
    </>
  );
};

export default ProductList;
