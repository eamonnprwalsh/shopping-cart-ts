import { EUROPE_TAX } from '../constants';
import { DefaultItem, ShoppingCart } from '../types';
import { TaxProcessor } from './TaxProcessor';

export class EuropeTaxProcessor implements TaxProcessor<DefaultItem> {
  calculateTax(cart: ShoppingCart<DefaultItem>): number {
    return (
      cart.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      ) * EUROPE_TAX
    );
  }
}
