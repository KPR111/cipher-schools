import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import Router from './routes/route.js'

import Connection from './database/db.js';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.use('/user',Router);
const PORT=5000


app.listen(PORT,()=>console.log(`server is runnig on port number ${PORT}`))



const  USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;



Connection(USERNAME,PASSWORD);