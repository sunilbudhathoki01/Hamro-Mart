import mongoose from "mongoose";
import { PAYMENT_STATUS_PAID, PAYMENT_STATUS_PENDING, PAYMENT_STATUS_RECEIVED } from "../constants/paymentStatus.js";
import { PAYMENT_METHOD_CASHONDELIVERY, PAYMENT_METHOD_ESEWA, PAYMENT_METHOD_KHALTI } from "../constants/paymentMethod.js";
import { ORDERSTATUS_PENDING, ORDERSTATUS_RECEIVED } from "../constants/orderStatus.js";
const orderSchema=mongoose.Schema({
    orders:{
        type:[Object],
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:[String],
        country:{
            type:String,
            required:[true,"Address is required"]
        },
        province:{
            type:String,
            required:[true,"Province is required"]
        },
        city:{
            type:String,
            required:[true,"city is required"]
        },
        required:[true,"address is required"]
    },
    paymentStatus:{
        type:[String],
        enum:[PAYMENT_STATUS_PAID,PAYMENT_STATUS_PENDING,PAYMENT_STATUS_RECEIVED],
        default:PAYMENT_STATUS_PENDING
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    paymentMethod:{
        type:[String],
        enum:[PAYMENT_METHOD_ESEWA,PAYMENT_METHOD_KHALTI,PAYMENT_METHOD_CASHONDELIVERY],
        default:PAYMENT_METHOD_ESEWA
    },
    orderStatus:{
        type:[String],
        enum:[ORDERSTATUS_PENDING,ORDERSTATUS_RECEIVED],
        default:ORDERSTATUS_PENDING

    }
},{timestamps:true})
const orderModel=mongoose.model("Order",orderSchema)
export default orderModel