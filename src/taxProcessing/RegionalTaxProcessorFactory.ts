import { Region } from '../types';
import { EuropeTaxProcessor } from './EuropeTaxProcessor';
import { SimpleTaxProcessor } from './SimpleTaxProcessor';
import { USATaxProcessor } from './USATaxProcessor';
export class RegionalTaxProcessorFactory {
  getTaxProcessor(region: Region): SimpleTaxProcessor {
    if (region === Region.EUROPE) {
      return new EuropeTaxProcessor();
    }
    if (region === Region.USA) {
      return new USATaxProcessor();
    }
    return new SimpleTaxProcessor();
  }
}
