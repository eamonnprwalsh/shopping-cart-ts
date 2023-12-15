import { TaxProcessor } from '../taxProcessing/TaxProcessor';
import { ShoppingCart } from '../types';

export interface PaymentProcessor<I, V> {
  processPayment(cart: ShoppingCart<I>, taxProcessor: TaxProcessor<V>): number;
}
