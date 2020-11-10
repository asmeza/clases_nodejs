import { Request, Response, Application } from 'express';
import {TypeProductController} from '../controllers/typeProduct.controller';




export class TypeProductRoutes{
  typeProductController: TypeProductController = new TypeProductController();

  public rutas(app: Application): void{
    app.route("/typeProducts").get(this.typeProductController.index);
    app.route("/typeProduct").post(this.typeProductController.add);

  }
}
