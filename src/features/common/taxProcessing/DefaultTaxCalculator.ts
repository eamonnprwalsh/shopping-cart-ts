import { DEFAULT_TAX } from '../../../constants';
import { TaxCalculator } from './TaxCalculator';

export class DefaultTaxCalculator implements TaxCalculator<number> {
  calculateTax(netTotal: number): number {
    return netTotal * DEFAULT_TAX;
  }
}
