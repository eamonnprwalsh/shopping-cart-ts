export interface ShoppingCart {
  items: Item[];
}

interface Item {
  productId: string;
  quantity: number;
  price: number;
}

const EUROPE = 'europe';
const USA = 'usa';

export enum Region {
  EUROPE,
  USA,
}
