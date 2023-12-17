import { PaymentProcessor } from './PaymentProcessor';
import { TaxProcessor } from '../taxProcessing/TaxProcessor';
import { ShoppingCart, StripeItem } from '../../../types';
import { STRIPE_COMMISSION } from '../../../constants';

export class StripePaymentProcessor
  implements PaymentProcessor<StripeItem, number>
{
  processPayment(
    cart: ShoppingCart<StripeItem>,
    taxProcessor: TaxProcessor<number>
  ): number {
    const subtotal = cart.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return subtotal * STRIPE_COMMISSION + taxProcessor.calculateTax(subtotal);
  }
}
