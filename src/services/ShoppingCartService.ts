import { PaymentProcessor } from '../paymentProcessing/PaymentProcessor';
import { Region, ShoppingCart } from '../types';
import { RegionalTaxProcessorFactory } from '../taxProcessing/RegionalTaxProcessorFactory';
import { StripePaymentProcessor } from '../paymentProcessing/StripePaymentProcessor';

// High-level-Module
export class ShoppingCartService {
  constructor(
    private readonly paymentProcessor: PaymentProcessor,
    private readonly taxProcessorFactory: RegionalTaxProcessorFactory
  ) {}

  checkout(cart: ShoppingCart, region: Region): number {
    const taxProcessor = this.taxProcessorFactory.getTaxProcessor(region);
    const totalAmount = this.paymentProcessor.processPayment(
      cart,
      taxProcessor
    );
    return totalAmount;
  }
}
