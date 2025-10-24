import express from "express";
import dotenv from "dotenv";
import { userRouter } from './modules/user/user.router.ts';

dotenv.config();
const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.use('/users', userRouter);



app.listen(PORT)



