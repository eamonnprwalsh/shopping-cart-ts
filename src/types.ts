import { EUROPE, USA } from './constants';

export interface ShoppingCart<T> {
  items: T[];
}

export interface DefaultItem {
  productId: string;
  quantity: number;
  price: number;
}

export type Region = typeof EUROPE | typeof USA;

export interface StripeItem extends DefaultItem {
  stripeMerchantId: 'ST';
}

export interface PayPalItem extends DefaultItem {
  paypalMerchantId: 'PP';
}
