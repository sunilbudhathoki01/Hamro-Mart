import userModel from "../models/user.js"

// getAllUsers
const getAllUsers=async()=>{
const users=await userModel.find();
return users
}

// getUsersById
const getUserById=async(id)=>{
    const users=await userModel.findById(id);
    return users
}
// createUsers
const createUsers=async(data)=>{
    const users=await userModel.create(data);
    return users;
}
// deleteUsers
const deleteUsersById=async(id)=>{
    const users=await userModel.findByIdAndDelete(id);
    return users;
}
// updateUsers
const updateUsers=async(id,data)=>{
    const users=await userModel.findByIdAndUpdate(id,data)
    return users
}
export default {getAllUsers,getUserById,createUsers,deleteUsersById,updateUsers}