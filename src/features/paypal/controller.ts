import { Route, Controller, Post, Body, Request } from 'tsoa';
import { Request as ExpressRequest } from 'express';
import { ShoppingCartService } from '../../services/ShoppingCartService';
import { PayPalItem, Region, ShoppingCart } from '../../types';
import { RegionalTaxProcessorFactory } from '../common/taxProcessing/RegionalTaxProcessorFactory';
import { PayPalPaymentProcessor } from '../../features/common/paymentProcessing/PayPalPaymentProcessor';

@Route('shopping')
export class PayPalShoppingController extends Controller {
  private shoppingCartService: ShoppingCartService;

  constructor() {
    super();
    this.shoppingCartService = new ShoppingCartService(
      new PayPalPaymentProcessor(),
      new RegionalTaxProcessorFactory<string | number>()
    );
  }

  @Post('paypalCheckout')
  public async paypalCheckout(
    @Request() request: ExpressRequest,
    @Body()
    requestBody: {
      cart: ShoppingCart<PayPalItem>;
    }
  ): Promise<number> {
    try {
      const { cart } = requestBody;
      const ipAddress = request.ip as string;

      if (!cart) {
        throw new Error('Invalid request payload');
      }

      const totalAmount = this.shoppingCartService.checkout(cart, ipAddress);
      return totalAmount;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }
}
