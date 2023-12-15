import { ShoppingCartService } from './ShoppingCartService';
import { DefaultItem, Region, ShoppingCart } from '../types';
import { RegionalTaxProcessorFactory } from '../taxProcessing/RegionalTaxProcessorFactory';
import { SimpleTaxProcessor } from '../taxProcessing/SimpleTaxProcessor';
import { TaxProcessor } from '../taxProcessing/TaxProcessor';
import { EUROPE } from '../constants';
import { EuropeTaxProcessor } from '../taxProcessing/EuropeTaxProcessor';

class MockPaymentProcessor {
  processPayment(cart: any) {
    return 77;
  }
}

class MockRegionalTaxProcessorFactoryNumber
  implements RegionalTaxProcessorFactory<number>
{
  getTaxProcessor(region: Region): TaxProcessor<number> {
    return new SimpleTaxProcessor();
  }
}

class MockRegionalTaxProcessorFactoryString
  implements RegionalTaxProcessorFactory<string>
{
  getTaxProcessor(region: Region): TaxProcessor<string> {
    return new EuropeTaxProcessor();
  }
}

describe('ShoppingCartService', () => {
  it('should checkout and process payment successfully, number', () => {
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

    const result = shoppingCartService.checkout(mockShoppingCart, EUROPE);
    expect(result).toBe(77);
  });

  it('should checkout and process payment successfully, number', () => {
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

    const result = shoppingCartService.checkout(mockShoppingCart, EUROPE);
    expect(result).toBe(77);
  });
});
