import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import userRoute from './routes/userRoute.js'

const app=express()
const port=process.env.PORT || 4000

connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true}))

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.use('/api/user',userRoute)

app.listen(port,()=>console.log(`server started at port:${port}`))