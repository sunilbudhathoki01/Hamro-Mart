import cartModel from "../models/cart.js"

// getAllCart
const getAllcarts=async()=>{
    const cart=await cartModel.find();
    return cart;
}

// getCartById
const getCartById=async(id)=>{
    const cart=await cartModel.findById(id)
    return cart;
}
// createCart
const createCart=async(data)=>{
    const cart=await cartModel.create(data);
    return cart
}
// deleteCart
const deleteCart=async(id)=>{
    const cart=await cartModel.findByIdAndDelete(id);
    return cart
}
// updateCart
const updateCart=async(data,id)=>{
    const cart=await cartModel.findByIdAndUpdate(data,id);
    return cart
}
export default {getAllcarts,getCartById,createCart,deleteCart,updateCart}