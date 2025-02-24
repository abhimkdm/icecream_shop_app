import { IProduct } from "../interfaces";

//Business Logic
const fs = require("fs");
//const filePath="./data/Products.json";
import productData from "../data/Products.json";

//Read data from file
const readData = () => {
    //const jsonData = fs.readFileSync(filePath);
    const data : IProduct[] = productData as IProduct[];
    return data;
  };

/** 
 * *GET PRODUCTS
 * */ 
exports.getProducts = () => {
    return readData();
}