import { PaymentProcessor } from '../features/common/paymentProcessing/PaymentProcessor';
import { DefaultItem, ShoppingCart } from '../types';
import { RegionalTaxCalculatorFactory } from '../features/common/taxProcessing/RegionalTaxCalculatorFactory';

// High-level-Module
export class ShoppingCartService {
  constructor(
    private readonly paymentProcessor: PaymentProcessor<DefaultItem, number>,
    private readonly taxCalculatorFactory: RegionalTaxCalculatorFactory<
      string | number
    >
  ) {}

  async checkout(
    cart: ShoppingCart<DefaultItem>,
    ipAddress: string
  ): Promise<number> {
    const taxProcessor =
      await this.taxCalculatorFactory.getTaxProcessor(ipAddress);
    const totalAmount = this.paymentProcessor.processPayment(
      cart,
      taxProcessor
    );
    return totalAmount;
  }
}
