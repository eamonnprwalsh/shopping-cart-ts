import { StripePaymentProcessor } from './StripePaymentProcessor';
import { ShoppingCart } from '../types';
import { PaymentProcessor } from './PaymentProcessor';
import { TaxProcessor } from '../taxProcessing/TaxProcessor';

class MockTaxProcessor implements TaxProcessor {
  calculateTax(cart: ShoppingCart): number {
    return 10;
  }
}

const mockShoppingCart: ShoppingCart = {
  items: [
    { productId: '1', quantity: 2, price: 20 },
    { productId: '2', quantity: 1, price: 30 },
  ],
};

describe('test StripePaymentProcessor', () => {
  it('should calculate the correct total cost, plus the commission of 0.02% + tax', () => {
    // (2 * 20 + 1 * 30 ) * 1.02 + 10 = 83.5
    const result = new StripePaymentProcessor().processPayment(
      mockShoppingCart,
      new MockTaxProcessor()
    );
    expect(result).toBe(83.5);
  });
});
