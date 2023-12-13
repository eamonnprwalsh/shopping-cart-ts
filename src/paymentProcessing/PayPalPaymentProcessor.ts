import { TaxProcessor } from '../taxProcessing/TaxProcessor';
import { ShoppingCart } from '../types';
import { PaymentProcessor } from './PaymentProcessor';

export class PayPalPaymentProcessor implements PaymentProcessor {
  processPayment(cart: ShoppingCart, taxProcessor: TaxProcessor): number {
    const subtotal = cart.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const tax = taxProcessor.calculateTax(cart);
    return subtotal * PAYPAL_COMMISSION + tax;
  }
}
