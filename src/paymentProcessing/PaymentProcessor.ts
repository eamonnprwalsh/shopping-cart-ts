import { TaxProcessor } from '../taxProcessing/TaxProcessor';
import { ShoppingCart } from '../types';

export interface PaymentProcessor<T> {
  processPayment(cart: ShoppingCart<T>, taxProcessor: TaxProcessor<T>): number;
}
