import Product from "../models/product.js"
// getAll Products
const getAllProducts=async()=>{
    const products=await Product.find();
    return products
}
//get products By Id
const getProductsById=async(id)=>{
const products=await Product.findById(id)
return products
}

// create products
const createProducts=async(data)=>{
    const products=await Product.create(data);
return products
}
// delete producst
const deleteProductsById=async(id)=>{
    const products=await Product.findAnddelete(id);
    return products
}

// update products
const updateProducts=async(id,data)=>{
    const products=await Product.findAndUpdate(id,data);
    return products;

}
export default {getAllProducts,getProductsById,createProducts,deleteProductsById,updateProducts}