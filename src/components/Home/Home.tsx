// Demo Example
// const Home = (props : any) => {
//     console.log(props);
//     return <> <h1> Hello, {props.title} </h1> </>
// }

import ProductList from "../ProductsList/ProductsList";

// const Home = (props : any) => {
//     const { name, title } = props;
//     return <>
//     <h1> Hello, {title} {name} </h1>
//     {props.children}
//     </>
// }

const Home = (props: any) => {
  return (
    <>
      <h1>Hello, Welcome To Ice Cream Shop Application...!</h1>
      <br></br>
      <ProductList></ProductList>
    </>
  );
};

export default Home;
