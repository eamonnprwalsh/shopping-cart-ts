import { SIMPLE_TAX } from '../constants';
import { DefaultItem, ShoppingCart } from '../types';
import { TaxProcessor } from './TaxProcessor';

export class SimpleTaxProcessor implements TaxProcessor<DefaultItem> {
  calculateTax(cart: ShoppingCart<DefaultItem>): number {
    return (
      cart.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      ) * SIMPLE_TAX
    );
  }
}
