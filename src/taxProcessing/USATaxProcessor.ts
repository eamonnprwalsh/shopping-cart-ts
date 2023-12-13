import { ShoppingCart } from '../types';
import { TaxProcessor } from './TaxProcessor';

export class USATaxProcessor implements TaxProcessor {
  calculateTax(cart: ShoppingCart): number {
    const taxRate = 0.12;
    return (
      cart.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      ) * taxRate
    );
  }
}
