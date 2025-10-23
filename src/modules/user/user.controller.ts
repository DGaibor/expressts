import { UserService } from './user.service.js';

class UserController {
    
    constructor() {
    }
    
    get(){
       const userService = new UserService('Kruger');
        userService.get()
        //User service get method called Kruger
        
        const userService2 = new UserService('Wayne Enterprises');
        userService2.get()
        //User service get method called Wayne Enterprises
    }
}
