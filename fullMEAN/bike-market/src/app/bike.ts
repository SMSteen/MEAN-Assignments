export class Bike {
    _id: number;
    title: string;
    description: string;
    price: number;
    location: string;
    imgURL: string;
    owner: string;

    //temp until database connection
    constructor() {
    this._id = Math.floor(Math.random() * 1000);
    }
}