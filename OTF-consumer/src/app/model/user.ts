import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';

export class User {
    private userID: any;
    private name: string;
    private surname: string;
    private email: string;
    private passW: string;
    private role: string;
    private phone: number;

    constructor(userID:string, Fname:string, Lname:string, email:string, passW:string, role:string, phone:number){
        this.userID=userID;
        this.name=Fname;
        this.surname=Lname;
        this.email=email;
        this.passW=passW;
        this.role=role;
        this.phone=phone;
    }

    getUserID(): any {
        return this.userID;
    }
    
    getFname() :string{             //getters and setters, to modify user info
        return this.name;
    }
    setFname(name:string){
        this.name=name;
    }

    getLname() :string{
        return this.surname;
    }
    setLname(surname:string){
        this.surname=surname;
    }

    getEmail() :string{
        return this.email;
    }
    setEmail(email:string){
        this.email=email;
    }

    getPassW() :string{
        return this.passW;
    }
    setPassW(passW:string){
        this.passW=passW;
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