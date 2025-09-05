import userService from "../services/user.js"
// getAllUsers
const getAllUsers=async(req,res)=>{
try {
        const users=await userService.getAllUsers();
        res.json(users)
} catch (error) {
    console.log(error.message)
}    
}

// getUsersById
const getUserById=async(req,res)=>{
    try {
        const users=await userService.getUserById(req.params.id)
        res.json(users)
    } catch (error) {
        console.log(error.message)
    }
}

// createUsers
const createUsers=async(req,res)=>{
    try {
        const users=await userService.createUsers(req.body)
        res.json(users)
    } catch (error) {
        console.log(error.message)
    }
}

// deleteUsers
const deleteUsersById=async(req,res)=>{
try {
    const users=await userService.deleteUsersById(req.params)
    res.json(users)
    res.send("Users deleted successfully")
} catch (error) {
    console.log(error.message)
}
}
// updateUsers
const updateUsers=async()=>{
try {
    const users=await userService.updateUsers(req.body,req.params)
    res.json(users);
    res.send("users updated successfully.")
} catch (error) {
    console.log(error.message)
}
}
export default {getAllUsers,getUserById,createUsers,deleteUsersById,updateUsers}