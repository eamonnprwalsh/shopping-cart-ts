import { ShoppingCartService } from './ShoppingCartService';
import { DefaultItem, Region, ShoppingCart } from '../types';
import { RegionalTaxProcessorFactory } from '../taxProcessing/RegionalTaxProcessorFactory';
import { SimpleTaxProcessor } from '../taxProcessing/SimpleTaxProcessor';
import { TaxProcessor } from '../taxProcessing/TaxProcessor';
import { EUROPE } from '../constants';

class MockPaymentProcessor {
  processPayment(cart: any) {
    return 77;
  }
}

class MockRegionalTaxProcessorFactorySimple
  implements RegionalTaxProcessorFactory
{
  getTaxProcessor(region: Region): TaxProcessor<DefaultItem> {
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
    const mockShoppingCart: ShoppingCart<DefaultItem> = {
      items: [
        { productId: '1', quantity: 2, price: 20 },
        { productId: '2', quantity: 1, price: 30 },
      ],
    };

    const result = shoppingCartService.checkout(mockShoppingCart, EUROPE);
    expect(result).toBe(77);
  });
});
