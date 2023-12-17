import { PaymentProcessor } from '../features/common/paymentProcessing/PaymentProcessor';
import { DefaultItem, ShoppingCart } from '../types';
import { RegionalTaxProcessorFactory } from '../features/common/taxProcessing/RegionalTaxProcessorFactory';

// High-level-Module
export class ShoppingCartService {
  constructor(
    private readonly paymentProcessor: PaymentProcessor<DefaultItem, number>,
    private readonly taxProcessorFactory: RegionalTaxProcessorFactory<
      string | number
    >
  ) {}

  async checkout(
    cart: ShoppingCart<DefaultItem>,
    ipAddress: string
  ): Promise<number> {
    const taxProcessor =
      await this.taxProcessorFactory.getTaxProcessor(ipAddress);
    const totalAmount = this.paymentProcessor.processPayment(
      cart,
      taxProcessor
    );
    return totalAmount;
  }
}
