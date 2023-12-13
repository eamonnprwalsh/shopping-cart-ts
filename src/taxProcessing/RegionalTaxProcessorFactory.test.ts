import { Region } from '../types';
import { EuropeTaxProcessor } from './EuropeTaxProcessor';
import { SimpleTaxProcessor } from './SimpleTaxProcessor';
import { USATaxProcessor } from './USATaxProcessor';
import { RegionalTaxProcessorFactory } from './RegionalTaxProcessorFactory';

describe('RegionalTaxProcessorFactory', () => {
  it('should return EuropeTaxProcessor for Europe', () => {
    const factory = new RegionalTaxProcessorFactory();
    const taxProcessor = factory.getTaxProcessor(Region.EUROPE);
    expect(taxProcessor).toBeInstanceOf(EuropeTaxProcessor);
  });

  it('should return USATaxProcessor for USA', () => {
    const factory = new RegionalTaxProcessorFactory();
    const taxProcessor = factory.getTaxProcessor(Region.USA);
    expect(taxProcessor).toBeInstanceOf(USATaxProcessor);
  });

  it('should return SimpleTaxProcessor for unknown', () => {
    const factory = new RegionalTaxProcessorFactory();
    const taxProcessor = factory.getTaxProcessor(
      'unknown' as unknown as Region
    );
    expect(taxProcessor).toBeInstanceOf(SimpleTaxProcessor);
  });
});
