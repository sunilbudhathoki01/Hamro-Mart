import mongoose from "mongoose";
import config from "./config.js";

const connectdb=async()=>{
    try {
        const connectionInstance=await mongoose.connect(config.MONGO_URL)
        console.log(`Mongodb connection successfull at url:${config.MONGO_URL}/n and databasename:${config.dastabaseName}`)
    } catch (error) {
        console.log(`mongodb failed to established connection`,error)
        process.exit(1)
        
    }
}
export default connectdb