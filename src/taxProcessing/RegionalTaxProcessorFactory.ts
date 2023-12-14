import { EUROPE, USA } from '../constants';
import { Region } from '../types';
import { EuropeTaxProcessor } from './EuropeTaxProcessor';
import { SimpleTaxProcessor } from './SimpleTaxProcessor';
import { USATaxProcessor } from './USATaxProcessor';
export class RegionalTaxProcessorFactory {
  getTaxProcessor(region: Region): SimpleTaxProcessor {
    if (region === EUROPE) {
      return new EuropeTaxProcessor();
    }
    if (region === USA) {
      return new USATaxProcessor();
    }
    return new SimpleTaxProcessor();
  }
}
