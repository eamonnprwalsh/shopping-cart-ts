import { ShoppingCartService } from './ShoppingCartService';
import { DefaultItem, Region, ShoppingCart } from '../types';
import { RegionalTaxProcessorFactory } from '../features/common/taxProcessing/RegionalTaxProcessorFactory';
import { DefaultTaxProcessor } from '../features/common/taxProcessing/DefaultTaxProcessor';
import { TaxProcessor } from '../features/common/taxProcessing/TaxProcessor';
import { EUROPE } from '../constants';
import { EuropeTaxProcessor } from '../features/common/taxProcessing/EuropeTaxProcessor';

jest.mock('../services/RegionService', () => ({
  getRegionFromIP: jest.fn(),
}));

class MockPaymentProcessor {
  processPayment(cart: any) {
    return 77;
  }
}

class MockRegionalTaxProcessorFactoryNumber extends RegionalTaxProcessorFactory<number> {
  async getTaxProcessor(ipAddress: string): Promise<TaxProcessor<number>> {
    return new DefaultTaxProcessor();
  }
}

class MockRegionalTaxProcessorFactoryString extends RegionalTaxProcessorFactory<string> {
  async getTaxProcessor(ipAddress: string): Promise<TaxProcessor<string>> {
    return new EuropeTaxProcessor();
  }
}

describe('ShoppingCartService', () => {
  it('should checkout and process payment successfully, number', async () => {
    const mockPaymentProcessor = new MockPaymentProcessor();
    const mockRegionalTaxProcessorFactory =
      new MockRegionalTaxProcessorFactoryNumber();
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

    const result = await shoppingCartService.checkout(mockShoppingCart, EUROPE);
    expect(result).toBe(77);
  });

  it('should checkout and process payment successfully, string', async () => {
    const mockPaymentProcessor = new MockPaymentProcessor();
    const mockRegionalTaxProcessorFactory =
      new MockRegionalTaxProcessorFactoryString();
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

    const result = await shoppingCartService.checkout(mockShoppingCart, EUROPE);
    expect(result).toBe(77);
  });
});
