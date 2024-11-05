// Demo Example 
// const Home = (props : any) => {
//     console.log(props);
//     return <> <h1> Hello, {props.title} </h1> </>
// }

const Home = (props : any) => {
    const { name, title } = props;
    return <> 
    <h1> Hello, {title} {name} </h1> 
    {props.children}
    </>
}

export default Home;