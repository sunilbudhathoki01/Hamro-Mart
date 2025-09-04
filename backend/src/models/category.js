import mongoose from "mongoose";

const categorySchema=mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    imageId:{
        type:String,
        required:true
    },
    timestamp:true
})

const categoryModel=mongoose.model("Category",categorySchema)
export default categoryModel