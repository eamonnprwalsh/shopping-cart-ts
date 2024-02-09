import { ShoppingCartService } from './ShoppingCartService';
import { DefaultItem, Region, ShoppingCart } from '../types';
import { RegionalTaxCalculatorFactory } from '../features/common/taxProcessing/RegionalTaxCalculatorFactory';
import { DefaultTaxCalculator } from '../features/common/taxProcessing/DefaultTaxCalculator';
import { TaxCalculator } from '../features/common/taxProcessing/TaxCalculator';
import { EuropeTaxCalculator } from '../features/common/taxProcessing/EuropeTaxCalculator';

jest.mock('../services/RegionService', () => ({
  getRegionFromIP: jest.fn(),
}));

class MockPaymentProcessor {
  processPayment(cart: any) {
    return 77;
  }
}

class MockRegionalTaxCalculatorFactoryNumber extends RegionalTaxCalculatorFactory<number> {
  async getTaxCalculator(ipAddress: string): Promise<TaxCalculator<number>> {
    return new DefaultTaxCalculator();
  }
}

class MockRegionalTaxCalculatorFactoryString extends RegionalTaxCalculatorFactory<string> {
  async getTaxCalculator(ipAddress: string): Promise<TaxCalculator<string>> {
    return new EuropeTaxCalculator();
  }
}

describe('ShoppingCartService', () => {
  it('should checkout and process payment successfully, number', async () => {
    const mockPaymentProcessor = new MockPaymentProcessor();
    const mockRegionalTaxProcessorFactory =
      new MockRegionalTaxCalculatorFactoryNumber();
    const shoppingCartService = new ShoppingCartService(
      mockPaymentProcessor,
      mockRegionalTaxProcessorFactory
    );
    const mockShoppingCart: ShoppingCart<DefaultItem> = {
      items: [
        { productId: '1', quantity: 2, price: 20 },
        { productId: '2', quantity: 1, price: 30 },
      ],
    };

    const result = await shoppingCartService.checkout(
      mockShoppingCart,
      '1.1.1.1'
    );
    expect(result).toBe(77);
  });

  it('should checkout and process payment successfully, string', async () => {
    const mockPaymentProcessor = new MockPaymentProcessor();
    const mockRegionalTaxProcessorFactory =
      new MockRegionalTaxCalculatorFactoryString();
    const shoppingCartService = new ShoppingCartService(
      mockPaymentProcessor,
      mockRegionalTaxProcessorFactory
    );
    const mockShoppingCart: ShoppingCart<DefaultItem> = {
      items: [
        { productId: '1', quantity: 2, price: 20 },
        { productId: '2', quantity: 1, price: 30 },
      ],
    };

    const result = await shoppingCartService.checkout(
      mockShoppingCart,
      '1.1.1.2'
    );
    expect(result).toBe(77);
  });
});
