import { DEFAULT_TAX } from '../../../constants';
import { TaxProcessor } from './TaxProcessor';

export class DefaultTaxProcessor implements TaxProcessor<number> {
  calculateTax(netTotal: number): number {
    return netTotal * DEFAULT_TAX;
  }
}
