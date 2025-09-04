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
        const products=await productService.createProducts(req.body)
        res.json(products)
    } catch (error) {
        console.log(error.message)
    }
}
// deleteproducts
const deleteproducts=async(req,res)=>{
try {
    const products=await productService.deleteproducts(req.params)
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