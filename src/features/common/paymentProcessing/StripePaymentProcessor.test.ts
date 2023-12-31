import { StripePaymentProcessor } from './StripePaymentProcessor';
import { ShoppingCart, StripeItem } from '../../../types';
import { TaxCalculator } from '../taxProcessing/TaxCalculator';
import { STRIPE_MERCHANT_ID } from '../../../constants';

class MockTaxCalculator implements TaxCalculator<number> {
  calculateTax(netTotal: number): number {
    return 10;
  }
}

const mockShoppingCart: ShoppingCart<StripeItem> = {
  items: [
    {
      productId: '1',
      quantity: 2,
      price: 20,
      stripeMerchantId: STRIPE_MERCHANT_ID,
    },
    {
      productId: '2',
      quantity: 1,
      price: 30,
      stripeMerchantId: STRIPE_MERCHANT_ID,
    },
  ],
};

describe('test StripePaymentProcessor', () => {
  it('should calculate the correct total cost, plus the commission of 0.02% + tax', () => {
    // (2 * 20 + 1 * 30 ) * 1.02 + 10 = 83.5
    const result = new StripePaymentProcessor().processPayment(
      mockShoppingCart,
      new MockTaxCalculator()
    );
    expect(result).toBe(83.5);
  });
});
