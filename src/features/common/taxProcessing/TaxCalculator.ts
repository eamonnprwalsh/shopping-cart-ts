export interface TaxCalculator<V> {
  calculateTax(netTotal: V): number;
}
