import express from "express"
import cors from "cors"
import { connectDB } from "./db.js"
import userRouter from "./route/userRoute.js"
import 'dotenv/config.js'

//app config
const app = express()
const port = process.env.PORT || 4000

//middleware 
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);    
})