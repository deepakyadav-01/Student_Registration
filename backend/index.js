import express from 'express';
import dotenv from "dotenv";
import connectDB from "./db.js"
import formRouter from "./routes/form-routes/formRoutes.js"
import tableRouter from './routes/table-routes/tableRoutes.js';
import cors from 'cors'
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1",formRouter);
app.use("/api/v2",tableRouter);
connectDB();





// port
const port=process.env.PORT||5000;


app.listen(port,(req,res)=>{
    console.log(`server started on ${port}`)
})
