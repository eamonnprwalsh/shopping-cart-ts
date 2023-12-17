import { EuropeTaxProcessor } from './EuropeTaxProcessor';
import { DefaultTaxProcessor } from './DefaultTaxProcessor';
import { USATaxProcessor } from './USATaxProcessor';
import { RegionalTaxProcessorFactory } from './RegionalTaxProcessorFactory';
import { getRegionFromIP } from '../../../services/RegionService';

jest.mock('../../../services/RegionService', () => ({
  _esModule: true,
  getRegionFromIP: jest
    .fn()
    .mockResolvedValueOnce('EUROPE')
    .mockResolvedValueOnce('USA')
    .mockResolvedValueOnce('unknown'),
}));

describe('RegionalTaxProcessorFactory', () => {
  it('should return EuropeTaxProcessor for Europe', async () => {
    const ipAddress = '1.1.1.0';
    const factory = new RegionalTaxProcessorFactory();
    const taxProcessor = await factory.getTaxProcessor(ipAddress);
    expect(taxProcessor).toBeInstanceOf(EuropeTaxProcessor);
  });

  it('should return USATaxProcessor for USA', async () => {
    const ipAddress = '1.1.1.1';
    const factory = new RegionalTaxProcessorFactory();
    const taxProcessor = await factory.getTaxProcessor(ipAddress);
    expect(taxProcessor).toBeInstanceOf(USATaxProcessor);
  });

  it('should return DefaultTaxProcessor for unknown', async () => {
    const ipAddress = '1.1.1.2';
    const factory = new RegionalTaxProcessorFactory();
    const taxProcessor = await factory.getTaxProcessor(ipAddress);
    expect(taxProcessor).toBeInstanceOf(DefaultTaxProcessor);
  });
});
