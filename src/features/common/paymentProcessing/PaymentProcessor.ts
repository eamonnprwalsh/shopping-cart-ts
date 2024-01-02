import { TaxCalculator } from '../taxProcessing/TaxCalculator';
import { ShoppingCart } from '../../../types';

export interface PaymentProcessor<I, V> {
  processPayment(
    cart: ShoppingCart<I>,
    taxCalculator: TaxCalculator<V>
  ): number;
}
