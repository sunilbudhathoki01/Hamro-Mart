import express from "express"
import connectdb from "./src/config/database.js";
import config from "./src/config/config.js";
import productRoute from "./src/routes/product.js";
import userRoute from "./src/routes/user.js"

connectdb()
const app=express()
// midleware
app.use(express.json())
app.use("/api/products",productRoute)
app.use("/api/users",userRoute)

// sample route
app.get((req,res)=>{
res.json("This is the sample route ")
})

// server starting
app.listen(config.port,()=>{
console.log(`server is running on port :${config.port}`)
})

