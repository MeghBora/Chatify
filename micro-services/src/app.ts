import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/DB';
dotenv.config();
connectDB()
const app = express();
app.use(express.json())

app.listen(process.env.PORT, () => console.log("live on port", process.env.PORT))
