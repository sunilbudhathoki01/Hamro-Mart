import categoryService from "../services/category.js"
// getAllCategory
const getAllCategory=async(req,res)=>{
    try {
        const category=await categoryService.getAllCategory()
        res.json(category)
    } catch (error) {
        console.log(error.message)
    }
}
// getCategoryById
const getCategoryById=async(req,res)=>{
    try {
        const category=await categoryService.getCategoryById(req.params.id)
        res.json(category)
    } catch (error) {
        console.log(error.message)
    }
}

// createCategory
const createCategory=async(req,res)=>{
    try {
        const category=await categoryService.createCategory(req.body)
        res.json(category)
    } catch (error) {
        console.log(error.message)
    }
}

// deleteCategory
const deleteCategory=async(req,res)=>{
try {
    const category=await categoryService.deleteCategory(req.params.id)
    res.json(category)
} catch (error) {
    console.log(error.message)
}
}

// updateCategory
const updateCategory=async(req,res)=>{
    try {
        const category=await categoryService.updateCategory(req.body,req.params.id)
        res.json(category)
    } catch (error) {
        console.log(error.message)
    }
}
export default {getAllCategory,getCategoryById,createCategory,deleteCategory,updateCategory}