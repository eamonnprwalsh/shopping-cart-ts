import { EUROPE, USA } from '../constants';
import { Region } from '../types';
import { EuropeTaxProcessor } from './EuropeTaxProcessor';
import { SimpleTaxProcessor } from './SimpleTaxProcessor';
import { TaxProcessor } from './TaxProcessor';
import { USATaxProcessor } from './USATaxProcessor';

export class RegionalTaxProcessorFactory<V> {
  getTaxProcessor(region: Region): TaxProcessor<V> {
    if (region === EUROPE) {
      return new EuropeTaxProcessor() as TaxProcessor<V>;
    }
    if (region === USA) {
      return new USATaxProcessor() as TaxProcessor<V>;
    }
    return new SimpleTaxProcessor() as TaxProcessor<V>;
  }
}
