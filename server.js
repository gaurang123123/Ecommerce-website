import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authroutes from './routes/authRoute.js'
import cors from 'cors'
import categoryRoutes from './routes/CategoryRoutes.js';
import productRoutes from './routes/ProductRoutes.js';
//config env
dotenv.config();

//database config
connectDB();


const app = express();

//middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authroutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);

//rest api create

app.get('/' , (req,res)=>{
    res.send({
        message:"hello"
    })
})

const PORT = process.env.PORT || 9000;
app.listen(PORT , ()=>{
    console.log(`Server running on mode ${process.env.devmode} ${PORT}`.bgCyan.white);
})