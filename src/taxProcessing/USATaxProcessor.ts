import { DefaultItem, ShoppingCart } from '../types';
import { TaxProcessor } from './TaxProcessor';

export class USATaxProcessor implements TaxProcessor<DefaultItem> {
  calculateTax(cart: ShoppingCart<DefaultItem>): number {
    const taxRate = 0.12;
    return (
      cart.items.reduce((total, item) => total + item.price * item.price, 0) *
      taxRate
    );
  }
}
