//Route Requests will be handled Here (Implementation) GET, POST, PUT, DELETE 

import { IProduct } from "../interfaces";

const productService = require("../services/products");

exports.getProducts = (req : any , res : any)=> {
    const productList: IProduct[] = productService.getProducts();
    res.send(productList);
}

