import { IProduct } from "../interfaces";

//Business Logic
const fs = require("fs");
const filePath="./data/Products.json";

//Read data from file
const readData = () => {
    const jsonData = fs.readFileSync(filePath);
    const data : IProduct[] = JSON.parse(jsonData) as IProduct[];
    console.table(data);
    return data;
  };

/** 
 * *GET PRODUCTS
 * */ 
exports.getProducts = () => {
    return readData();
}