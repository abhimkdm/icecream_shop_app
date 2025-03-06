//Route Requests will be handled Here (Implementation) GET, POST, PUT, DELETE 

import { IProduct } from "../interfaces";

const productService = require("../services/products");

exports.getProducts = async (req : any , res : any)=> {
    const productList: IProduct[] = await productService.fetchProducts();
    res.send(productList);
}

