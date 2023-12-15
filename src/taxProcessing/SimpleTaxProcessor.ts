import { SIMPLE_TAX } from '../constants';
import { DefaultItem, ShoppingCart } from '../types';
import { TaxProcessor } from './TaxProcessor';

export class SimpleTaxProcessor implements TaxProcessor<number> {
  calculateTax(netTotal: number): number {
    return netTotal * SIMPLE_TAX;
  }
}
