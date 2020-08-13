export class Booking {

    private bookingID: any;
    private userID: any;
    private listingID: any;
    private dateStart: string;
    private dateEnd: string;
    private status: string;

    constructor(bookingID: any, userID: any, listingID: any, dateStart: string, dateEnd: string, status: string) {
        this.bookingID = bookingID;
        this.userID = userID;
        this.listingID = listingID;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.status = status;
    }

    getBookignID(): any {
        return this.bookingID;
    }

    getUserID(): any {
        return this.userID;
    }

    getListingID(): any {
        return this.listingID;
    }

    getDateStart(): string {
        return this.dateStart;
    }
    setDateStart(dateStart: string) {
        this.dateStart = dateStart;
    }

    getDateEnd(): string {
        return this.dateEnd;
    }
    setDateEnd(dateEnd: string) {
        this.dateEnd = dateEnd;
    }

    getStatus(): string {
        return this.status;
    }
    setStatus(status: string) {
        this.status = status;
    }

}
