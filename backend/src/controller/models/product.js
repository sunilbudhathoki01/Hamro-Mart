import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Product title is required"]
    },
    price:{
        type:Number,
        required:[true,"Product Price is required"]
    },
    discountPercentage:{
        type:Number,
        required:[true]
    },
    colors:[string]

})
const Product=mongoose.model("Product",productSchema)
export default Product
