import mongoose from "mongoose";

const cartSchema=mongoose.Schema({
    product:{
        type:Object,
        required:true
    },
    addedBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
    }
},{timestamps:true})
const cartModel=mongoose.model("Cart",cartSchema)
export default cartModel