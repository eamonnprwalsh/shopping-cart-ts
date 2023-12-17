import {
  STRIPE_MERCHANT_ID,
  PAYPAL_MERCHANT_ID,
  EUROPE,
  USA,
} from './constants';

export interface ShoppingCart<T> {
  items: T[];
}

export interface DefaultItem {
  productId: string;
  quantity: number;
  price: number;
}

export type Region = typeof EUROPE | typeof USA;

type StripeMerchantIdType = typeof STRIPE_MERCHANT_ID;
type PayPalMerchantIdType = typeof PAYPAL_MERCHANT_ID;

export interface StripeItem extends DefaultItem {
  stripeMerchantId: string;
}

export interface PayPalItem extends DefaultItem {
  paypalMerchantId: string;
}
