export interface TaxProcessor<V> {
  calculateTax(netTotal: V): number;
}
