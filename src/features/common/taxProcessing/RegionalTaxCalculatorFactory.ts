import { EUROPE, USA } from '../../../constants';
import { EuropeTaxCalculator } from './EuropeTaxCalculator';
import { DefaultTaxCalculator } from './DefaultTaxCalculator';
import { TaxCalculator } from './TaxCalculator';
import { USATaxCalculator } from './USATaxCalculator';
import { getRegionFromIP } from '../../../services/RegionService';

export class RegionalTaxCalculatorFactory<V> {
  async getTaxProcessor(ipAddress: string): Promise<TaxCalculator<V>> {
    const region = await getRegionFromIP(ipAddress);

    if (region === EUROPE) {
      return new EuropeTaxCalculator() as TaxCalculator<V>;
    }

    if (region === USA) {
      return new USATaxCalculator() as TaxCalculator<V>;
    }
    return new DefaultTaxCalculator() as TaxCalculator<V>;
  }
}
