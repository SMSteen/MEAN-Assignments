let counter = 24;
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

  constructor() {
    this._id = counter++;
  }
}

// things to add
// serialnum: number;  not all items
// category: string;  ALL ITEMS
// archived??
// seasonal??

// const Dept = {
//   Womens: 'womens' as 'womens',
//   Mens: 'mens' as 'mens',
//   Kids: 'kids' as 'kids',
// };

// const Style = {
//   Sneakers: 'sneakers' as 'sneakers',
//   Sandals: 'sandals' as 'sandals',
//   Heels: 'heels' as 'heels',
//   Boots: 'boots' as 'boots',
//   Loafers: 'loafers' as 'loafers',
//   Mules: 'mules' as 'mules',
//   Slippers: 'slippers' as 'slippers',
//   Flats: 'flats' as 'flats',
//   Wedges: 'wedges' as 'wedges',
//   Boatshoes: 'boatshoes' as 'boatshoes',
//   Oxfords: 'oxfords' as 'oxfords',
// };
