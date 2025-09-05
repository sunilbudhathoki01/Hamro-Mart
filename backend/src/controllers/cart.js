import cartService from "../services/cart.js"
// getAllCarts
const getAllCarts=async (req,res)=>{
try {
        const cart=await cartService.getAllcarts();
        res.json(cart)
} catch (error) {
    console.log(error.message)
}    
}

// getcartById
const getCartById=async(req,res)=>{
    try {
        const cart=await cartService.getCartById(req.params.id)
        res.json(cart)
    } catch (error) {
        console.log(error.message)
    }
}

// createCart
const createCart=async(req,res)=>{
    try {
        const cart=await cartService.createCart(req.body)
        res.json(cart)
    } catch (error) {
        console.log(error.message)
    }
}

// deleteCart
const deleteCart=async(req,res)=>{
try {
    const cart=await cartService.deleteCart(req.params.id)
    res.json(cart)
} catch (error) {
    console.log(error.message)
}
}

// updateCart
const updateCart=async (req,res)=>{
    try {
        const cart=await cartService.updateCart(req.params.id,req.body)
        res.json(cart)
    } catch (error) {
        console.log(error.message)
    }
}
export default {getAllCarts,getCartById,createCart,deleteCart,updateCart}