import { TaxProcessor } from '../taxProcessing/TaxProcessor';
import { DefaultItem, StripeItem, ShoppingCart, PayPalItem } from '../types';
import { PaymentProcessor } from './PaymentProcessor';
import { PAYPAL_COMMISSION } from '../constants';

export class PayPalPaymentProcessor implements PaymentProcessor<PayPalItem> {
  processPayment(
    cart: ShoppingCart<PayPalItem>,
    taxProcessor: TaxProcessor<PayPalItem>
  ): number {
    const subtotal = cart.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const tax = taxProcessor.calculateTax(cart);
    return subtotal * PAYPAL_COMMISSION + tax;
  }
}
