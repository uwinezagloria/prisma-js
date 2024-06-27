console.log("hello world")
import express from"express"
import dotenv from "dotenv"
import router from "./route/index.route.js"
dotenv.config()
const app=express()
app.use(express.json())
app.use(router)
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})