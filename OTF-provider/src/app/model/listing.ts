export class Listing {
    private id: any;
    private hostID: any;
    private title: string;
    private location: string;
    private description: string;
    private numberOfPeople: number;
    private pricePerNight: number;
    private imgURL: string;

    constructor(id:any, hostID:any, title:string, location:string, description: string, numberOfPeople: number, pricePerNight:number, imgURL:string){
        this.id = id;
        this.title=title;
        this.location=location;
        this.description=description;
        this.numberOfPeople=numberOfPeople;
        this.pricePerNight=pricePerNight;
        this.imgURL=imgURL;
    }

    getListingID() :any{
        return this.id;
    }

    getHostID() :any{
        return this.hostID;
    }

    getTitle() :string{             //getters and setters, to modify user info
        return this.title;
    }
    setTitle(title:string){
        this.title=title;
    }

    getLocation() :string{
        return this.location;
    }
    setLocation(location:string){
        this.location=location;
    }

    getDescription() :string{
        return this.description;
    }
    setDescription(description:string){
        this.description=description;
    }

    getPeople() :number{
        return this.pricePerNight;
    }
    setPeople(numberOfPeople:number){
        this.numberOfPeople = numberOfPeople;
    }

    getPrice() :number{
        return this.pricePerNight;
    }
    setPrice(pricePerNight:number){
        this.pricePerNight = pricePerNight;
    }

    getImgUrl() :string{
        return this.imgURL;
    }
    setImgUrl(imgURL:string){
        this.imgURL=imgURL;
    }
}