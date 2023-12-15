import { EUROPE_TAX } from '../constants';
import { TaxProcessor } from './TaxProcessor';

export class EuropeTaxProcessor implements TaxProcessor<string> {
  calculateTax(netTotal: string): number {
    const netTotalAsNumber = parseFloat(netTotal);

    if (isNaN(netTotalAsNumber as number)) {
      throw new Error('Invalid netTotal. Cannot convert to a number.');
    }

    return netTotalAsNumber * EUROPE_TAX;
  }
}
