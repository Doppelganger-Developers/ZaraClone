const express=require("express")
const connectio=require("./config.ts")
const app= express()


app.get("/", (req:any,res:any)=>{
    return res.send("hello")
})

app.listen(5000,()=>console.log("listening to port 5000"))