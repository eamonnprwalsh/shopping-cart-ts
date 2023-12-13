import { ShoppingCart } from '../types';

export interface TaxProcessor {
  calculateTax(cart: ShoppingCart): number;
}
