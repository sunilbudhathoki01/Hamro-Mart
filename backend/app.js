import express from "express"
const app=express()
// midleware
app.use(express.json)

// sample route
app.get((req,res)=>{
res.json("This is the sample route ")
})

// server starting
app.listen(2000,()=>{
console.log("serv is running on port 2000")
})
