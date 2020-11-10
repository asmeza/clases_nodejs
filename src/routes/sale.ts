import { Request, Response, Application } from 'express';
import { SaleController } from '../controllers/sale.controller';

export class SaleRoutes{
  saleController: SaleController = new SaleController();

  public rutas(app: Application): void{
    app.route("/ventas").get(this.saleController.index);

  }
}