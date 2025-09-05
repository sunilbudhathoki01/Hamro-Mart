import mongoose from "mongoose";
const reviewSchema=mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    review:{
        type:String,
        required:true
    },
    ratings:{
        type:Number,
        default:0,
        required:true
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    },
},{timestamps:true})
const reviewModel=mongoose.model("Review",reviewSchema)
export default reviewModel