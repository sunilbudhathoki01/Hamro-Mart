import ApiResponse from "../../utils/APiResponse.js"
import uploadFile from "../../utils/cloudinary.js"
import productService from "../services/product.js"
// getAllProducts
const getAllProducts=async(requestAnimationFrame,res)=>{
    try{
        const products=await productService.getAllProducts()
        // res.json(products)
        res.json("getting the products")
    }catch(error){
        console.log(error.message)

    }
}
// getProductsById
const getProductsById=async(req,res)=>{
    try {
        const products=await productService.getProductsById(req.params)
        res.json(products)
    } catch (error) {
       console.log(error.message)
    }
}
// createProducts
const createProducts=async(req,res)=>{
    try {
        const file=req.files
        const data=req.data
        // const uploadFile=await uploadFile(file)
        const products=await productService.createProducts(data,file)
        return res.status(201).json(new ApiResponse(201,products,"Products added successfully"))
    } catch (error) {
        return res.status(500).json(new ApiResponse(500,{},"Something went wrong internally"))
    }
}
// deleteproducts
const deleteproducts=async(req,res)=>{
try {
    const products=await productService.deleteProductsById(req.params.id);
} catch (error) {
    console.log(error.message)
}
}
// updateProducts
const updateProducts=async(req,res)=>{
    try {
        const products=await productService.updateProducts(req.params,req.body)
    } catch (error) {
        console.log(error.message)
    }
}

export default {createProducts,getAllProducts,getProductsById,deleteproducts}