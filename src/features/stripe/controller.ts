import { Route, Controller, Post, Body, Request } from 'tsoa';
import { Request as ExpressRequest } from 'express';
import { ShoppingCartService } from '../../services/ShoppingCartService';
import { ShoppingCart, StripeItem } from '../../types';
import { RegionalTaxCalculatorFactory } from '../common/taxProcessing/RegionalTaxCalculatorFactory';
import { StripePaymentProcessor } from '../common/paymentProcessing/StripePaymentProcessor';

@Route('shopping')
export class StripeShoppingController extends Controller {
  private shoppingCartService: ShoppingCartService;

  constructor() {
    super();
    this.shoppingCartService = new ShoppingCartService(
      new StripePaymentProcessor(),
      new RegionalTaxCalculatorFactory<string | number>()
    );
  }

  @Post('stripeCheckout')
  public async stripeCheckout(
    @Request() request: ExpressRequest,
    @Body()
    requestBody: {
      cart: ShoppingCart<StripeItem>;
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
