import { EUROPE, USA } from './constants';

export interface ShoppingCart<T> {
  items: T[];
}

export interface DefaultItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface StripeItem extends DefaultItem {
  stripeMerchantId: string;
}

export interface PayPalItem extends DefaultItem {
  paypalMerchantId: string;
}

export type Region = typeof EUROPE | typeof USA;
