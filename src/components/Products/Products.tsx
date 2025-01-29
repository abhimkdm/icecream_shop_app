import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Products: React.FC<any> = () => {
  const Products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ];
  return (
    <>
      <h1> Products Page </h1>

      <ul>
        {Products.map((product) => {
          return (
            <>
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </li>
            </>
          );
        })}
      </ul>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Typography>
    </>
  );
};

export default Products;
