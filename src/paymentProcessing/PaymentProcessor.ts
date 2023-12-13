import { TaxProcessor } from '../taxProcessing/TaxProcessor';
import { ShoppingCart } from '../types';

export interface PaymentProcessor {
  processPayment(cart: ShoppingCart, taxProcessor: TaxProcessor): number;
}
