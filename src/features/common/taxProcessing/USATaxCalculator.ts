import { USA_TAX } from '../../../constants';
import { TaxCalculator } from './TaxCalculator';

export class USATaxCalculator implements TaxCalculator<number> {
  calculateTax(netTotal: number): number {
    return netTotal * USA_TAX;
  }
}
