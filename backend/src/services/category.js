import categoryModel from "../models/category.js"

// getAllCategory
const getAllCategory=async()=>{
    const category=await categoryModel.find();
    return category
}

// getCategoryById
const getCategoryById=async(id)=>{
    const category=await categoryModel.findById(id)
    return category;
}

// createCategory
const createCategory=async(data)=>{
const category=await categoryModel.create(data);
return category;
}

// deleteCategory
const deleteCategory=async(id)=>{
    const category=await categoryModel.findByIdAndDelete(id);
    return category;
}

// updateCategory
const updateCategory=async(id,data)=>{
    const category=await categoryModel.findByIdAndUpdate(id,data);
    return category;
}

export default {getAllCategory,getCategoryById,createCategory,deleteCategory,updateCategory}