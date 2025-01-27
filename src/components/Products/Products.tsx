import { Link } from "react-router-dom";

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
                <Link to={""}>{product.name}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
