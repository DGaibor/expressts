import { Router } from 'express';
import { UserController } from './user.controller.ts';
export const userRouter =  Router();
const userController = new UserController();

userRouter.post('/', userController.post )

