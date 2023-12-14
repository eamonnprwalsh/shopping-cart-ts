import { DefaultItem, ShoppingCart } from '../types';
import { TaxProcessor } from './TaxProcessor';

export class SimpleTaxProcessor implements TaxProcessor<DefaultItem> {
  calculateTax(cart: ShoppingCart<DefaultItem>): number {
    const taxRate = 0.1;
    return (
      cart.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      ) * taxRate
    );
  }
}
