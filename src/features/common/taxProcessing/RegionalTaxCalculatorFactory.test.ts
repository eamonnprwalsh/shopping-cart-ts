import { EuropeTaxCalculator } from './EuropeTaxCalculator';
import { DefaultTaxCalculator } from './DefaultTaxCalculator';
import { USATaxCalculator } from './USATaxCalculator';
import { RegionalTaxCalculatorFactory } from './RegionalTaxCalculatorFactory';

jest.mock('../../../services/RegionService', () => ({
  _esModule: true,
  getRegionFromIP: jest
    .fn()
    .mockResolvedValueOnce('Europe')
    .mockResolvedValueOnce('North America')
    .mockResolvedValueOnce('unknown'),
}));

describe('RegionalTaxCalculatorFactory', () => {
  it('should return EuropeTaxCalculator for Europe', async () => {
    const ipAddress = '1.1.1.0';
    const factory = new RegionalTaxCalculatorFactory();
    const taxProcessor = await factory.getTaxProcessor(ipAddress);
    expect(taxProcessor).toBeInstanceOf(EuropeTaxCalculator);
  });

  it('should return USATaxCalculator for USA', async () => {
    const ipAddress = '1.1.1.1';
    const factory = new RegionalTaxCalculatorFactory();
    const taxProcessor = await factory.getTaxProcessor(ipAddress);
    expect(taxProcessor).toBeInstanceOf(USATaxCalculator);
  });

  it('should return DefaultTaxCalculator for unknown', async () => {
    const ipAddress = '1.1.1.2';
    const factory = new RegionalTaxCalculatorFactory();
    const taxProcessor = await factory.getTaxProcessor(ipAddress);
    expect(taxProcessor).toBeInstanceOf(DefaultTaxCalculator);
  });
});
