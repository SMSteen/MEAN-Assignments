// let counter = 24;
export class Product {
  _id: number;
  upc: number; // ALL ITEMS - upc?
  dept: string; // ALL ITEMS
  category: string; // ALL ITEMS
  brand: string; // ALL ITEMS - vendor/manufacturer?
  desc: string; // ALL ITEMS - description?
  cost: number; // ALL ITEMS
  price: number; // ALL ITEMS
  suggestedRetail: number; // not all items; default price if null?
  color: string; // not all items
  style: string; // not all items
  size: string; // not all items
  qty: number; // ALL ITEMS
  image: string; // file upload; ALL ITEMS, not required

  //   constructor() {
  //     this._id = counter++;
  //   }
}

// things to add
// serialnum: number;  not all items
// category: string;  ALL ITEMS
// archived??
// seasonal??
