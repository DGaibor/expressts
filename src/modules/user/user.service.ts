
export class UserService {
    
    company: string= '';
    
    // CompanyName viene de afuera de la clase
    constructor(companyName: string) {
        this.company = companyName; 
    }
    
    get(){
        
        console.log("User service get method called"+ this.company);
    }
    create(){
        console.log("User service create method called");
    }
    update(){
        console.log("User service update method called");
    }
}
