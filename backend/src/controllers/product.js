import ApiError from "../../utils/ApiError.js"
import ApiResponse from "../../utils/APiResponse.js"
import uploadFile from "../../utils/cloudinary.js"
import productService from "../services/product.js"

// getAllProducts
const getAllProducts=async(req,res,next)=>{
    try{
        const products=await productService.getAllProducts()
        return res.status(200).json(new ApiResponse(200,products,"products fetched successfully"))
    }catch(error){
        console.error("Error fetching products",error)
      next(error)

    }
}
// getProductsById
const getProductsById=async(req,res,next)=>{
    try {
        const {id}=req.params;
        const products=await productService.getProductsById(id)
        if(!products){
            throw new ApiError(404,"Product not found")
        }
        return res.status(200).json( new ApiResponse(200,products,"Products fetched successfully"))
    } catch (error) {
        console.error("Error fetching the products",error)
        next(error)
    }
}
// createProducts
const createProducts=async(req,res,next)=>{
    try {
        const file=req.files
        const data=req.body
        // const uploadFile=await uploadFile(file)
        const products=await productService.createProducts(data,file)
        return res.status(201).json(new ApiResponse(201,products,"Products added successfully"))
    } catch (error) {
       next(error)
    }
}
// deleteproducts
const deleteproducts=async(req,res,next)=>{
try {
    const {id}=req.params;
    const products=await productService.deleteProductsById(id);
    if(!products){
        throw new ApiError(404,"Product not found or already deleted")
    }
    return res.status(200).json(new ApiResponse(200,products,"products deleted successfully."))
} catch (error) {
    console.error("Error fetching the data",error)
    next(error)
}
}
// updateProducts
const updateProducts=async(req,res,next)=>{
    try {
        const {id}=req.params
        const data=req.body
        const products=await productService.updateProducts(id,data)
        if(!products){
            throw new ApiError(404,`product of id: ${id} is not found`)
        }
        return res.status(200).json(new ApiResponse(200,products,"Products updated successfully."))
    } catch (error) {
      next(error)
    }
}

export default {createProducts,getAllProducts,getProductsById,deleteproducts,updateProducts}