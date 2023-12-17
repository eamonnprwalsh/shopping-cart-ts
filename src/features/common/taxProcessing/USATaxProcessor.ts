import { USA_TAX } from '../../../constants';
import { TaxProcessor } from './TaxProcessor';

export class USATaxProcessor implements TaxProcessor<number> {
  calculateTax(netTotal: number): number {
    return netTotal * USA_TAX;
  }
}
