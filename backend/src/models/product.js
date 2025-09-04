import mongoose from "mongoose";
import { type } from "os";
const productSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"Product title is required"]
    },
    price:{
        type:Number
    },
    discountPercentage:{
        type:Number,
        required:[true]
    },
    description:{
        type:String
    },
    colors:{
        type:[String]
    },
    sizes:{
        type:[String]
    },
    brand:{
        type:String
    },
    stock:{
        type:Number
    },
    images:{
        type:[String]
    },
    imagesId:{
        type:[String]
    },
    category:{
        type:String
    }
    // timestamp:[true]
})
const Product=mongoose.model("Product",productSchema)
export default Product