import { EUROPE, USA } from '../../../constants';
import { EuropeTaxProcessor } from './EuropeTaxProcessor';
import { DefaultTaxProcessor } from './DefaultTaxProcessor';
import { TaxProcessor } from './TaxProcessor';
import { USATaxProcessor } from './USATaxProcessor';
import { getRegionFromIP } from '../../../services/RegionService';

export class RegionalTaxProcessorFactory<V> {
  async getTaxProcessor(ipAddress: string): Promise<TaxProcessor<V>> {
    const region = await getRegionFromIP(ipAddress);

    if (region === EUROPE) {
      return new EuropeTaxProcessor() as TaxProcessor<V>;
    }

    if (region === USA) {
      return new USATaxProcessor() as TaxProcessor<V>;
    }
    return new DefaultTaxProcessor() as TaxProcessor<V>;
  }
}
