import { Request, Response, Application } from 'express';
import {ProductController} from '../controllers/product.controller';




export class ProductRoutes{
  productocontroller: ProductController = new ProductController();

  public rutas(app: Application): void{
    app.route("/products").get(this.productocontroller.index);

  }
}
