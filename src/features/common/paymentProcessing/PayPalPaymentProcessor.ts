import { TaxCalculator } from '../taxProcessing/TaxCalculator';
import { ShoppingCart, PayPalItem } from '../../../types';
import { PaymentProcessor } from './PaymentProcessor';
import { PAYPAL_COMMISSION } from '../../../constants';

export class PayPalPaymentProcessor
  implements PaymentProcessor<PayPalItem, number>
{
  processPayment(
    cart: ShoppingCart<PayPalItem>,
    taxCalculator: TaxCalculator<number>
  ): number {
    const netTotal = cart.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return netTotal * PAYPAL_COMMISSION + taxCalculator.calculateTax(netTotal);
  }
}
