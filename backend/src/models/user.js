import mongoose from "mongoose";
import { USER_ROLE_ADMIN, USER_ROLE_MERCHANT, USER_ROLE_USER } from "../constants/userrole.js";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:[true,"fullname is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"email is required"]
    },
    username:{
        type:String,
        unique:true,
        required:[true,"username is already taken"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    avatar:{
        type:String, //coming from cloudinary
          required:true
    },
    avatarId:{
        type:String,
        required:true
    },
    role:{
        type:[String],
        enum:[USER_ROLE_ADMIN,USER_ROLE_MERCHANT,USER_ROLE_USER],
        default:USER_ROLE_USER
    },
    // timestamps:[true]
})
const userModel=mongoose.model("User",userSchema)
export default userModel