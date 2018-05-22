let counter: number = 24;
export class Shoe {
    id: number;
    brand: string;
    item: string;
    image: string;
    price: number;
    color: string;
    style: string;
    size: number;
    dept: string;
    qty: number;

    constructor() {
        this.id = counter++;
    }
}