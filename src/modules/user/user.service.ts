import type { User } from './user.interface.js';

export class UserService {
    
    company: string= '';
    
    // CompanyName viene de afuera de la clase
    constructor(companyName: string) {
        this.company = companyName; 
    }
    
    get(){
        
        console.log("User service get method called"+ this.company);
    }
    create(user: User){
        
        console.log("Aqui se va a crear un usuario en la base de datos", user);
    }
    update(){
        console.log("User service update method called");
    }
}
