export class Product {
  _id: string;
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
  image: string | any; // file upload; ALL ITEMS, not required
}

// things to add
// serialnum: number;  not all items
// archived??
// seasonal??
