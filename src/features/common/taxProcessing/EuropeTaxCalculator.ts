import { EUROPE_TAX } from '../../../constants';
import { TaxCalculator } from './TaxCalculator';

export class EuropeTaxCalculator implements TaxCalculator<string> {
  calculateTax(netTotal: string): number {
    const netTotalAsNumber = parseFloat(netTotal);

    if (isNaN(netTotalAsNumber as number)) {
      throw new Error('Invalid netTotal. Cannot convert to a number.');
    }

    return netTotalAsNumber * EUROPE_TAX;
  }
}
