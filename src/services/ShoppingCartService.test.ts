import { ShoppingCartService } from './ShoppingCartService';
import { Region, ShoppingCart } from '../types';
import { RegionalTaxProcessorFactory } from '../taxProcessing/RegionalTaxProcessorFactory';
import { SimpleTaxProcessor } from '../taxProcessing/SimpleTaxProcessor';
import { TaxProcessor } from '../taxProcessing/TaxProcessor';

class MockPaymentProcessor {
  processPayment(cart: any) {
    return 77;
  }
}

class MockRegionalTaxProcessorFactorySimple
  implements RegionalTaxProcessorFactory
{
  getTaxProcessor(region: Region): TaxProcessor {
    return new SimpleTaxProcessor();
  }
}

describe('ShoppingCartService', () => {
  it('should checkout and process payment successfully', () => {
    const mockPaymentProcessor = new MockPaymentProcessor();
    const mockRegionalTaxProcessorFactory =
      new MockRegionalTaxProcessorFactorySimple();
    const shoppingCartService = new ShoppingCartService(
      mockPaymentProcessor,
      mockRegionalTaxProcessorFactory
    );
    const mockShoppingCart: ShoppingCart = {
      items: [
        { productId: '1', quantity: 2, price: 20 },
        { productId: '2', quantity: 1, price: 30 },
      ],
    };

    const result = shoppingCartService.checkout(mockShoppingCart, Region.USA);
    expect(result).toBe(77);
  });
});
