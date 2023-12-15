import { TaxProcessor } from '../taxProcessing/TaxProcessor';
import { DefaultItem, StripeItem, ShoppingCart, PayPalItem } from '../types';
import { PaymentProcessor } from './PaymentProcessor';
import { PAYPAL_COMMISSION } from '../constants';

export class PayPalPaymentProcessor
  implements PaymentProcessor<PayPalItem, number>
{
  processPayment(
    cart: ShoppingCart<PayPalItem>,
    taxProcessor: TaxProcessor<number>
  ): number {
    const netTotal = cart.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return netTotal * PAYPAL_COMMISSION + taxProcessor.calculateTax(netTotal);
  }
}
