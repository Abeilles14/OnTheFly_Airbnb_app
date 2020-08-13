
export class User {
    private userID: any;
    private name: string;
    private surname: string;
    private email: string;
    private password: string;
    private role: string;
    private phone: number;

    constructor(userID:any, name:string, surname:string, email:string, password:string, role:string, phone:number){
        this.userID=userID;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.password=password;
        this.role=role;
        this.phone=phone;
    }

    getUserID(): any {
        return this.userID;
    }
    
    getName() :string{             //getters and setters, to modify user info
        return this.name;
    }
    setName(name:string){
        this.name=name;
    }

    getSurame() :string{
        return this.surname;
    }
    setSurname(surname:string){
        this.surname=surname;
    }

    getEmail() :string{
        return this.email;
    }
    setEmail(email:string){
        this.email=email;
    }

    getPassword() :string{
        return this.password;
    }
    setPassword(password:string){
        this.password=password;
    }
    
    getPhone() :number{
        return this.phone;
    }
    setPhone(phone:number){
        this.phone=phone;
    }

    getRole() :string{
        return this.role;
    }
}