import { ShoppingCart } from '../types';

export interface TaxProcessor<T> {
  calculateTax(cart: ShoppingCart<T>): number;
}
