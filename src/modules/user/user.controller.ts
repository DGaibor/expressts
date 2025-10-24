import { UserService } from './user.service.ts';
import type{ Request, Response } from 'express';
import type { User } from './user.interface.js';



export class UserController {
    
    constructor() {
    }
    
    get(){
       const userService = new UserService('Kruger');
        userService.get()
        
    }
    
    post(req: Request , res: Response){
     const userService = new UserService('Kruger'); 
     const body = req.body;
     const user: User = {
        email: body.email,
        password: body.password,
        name: body.name
     }
     
     userService.create(user);
     
     res.status(200).json({
        message: 'User created successfully'
     })
     
    }
}
