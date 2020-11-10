import { Request, Response, Application } from 'express';
import { ClientController } from '../controllers/client.controller';




export class ClientRoutes{
  clientcontroller: ClientController = new ClientController();

  public rutas(app: Application): void{
    app.route("/clients").get(this.clientcontroller.getAll);
    app.route("/client").get(this.clientcontroller.getOne);
    app.route("/client").post(this.clientcontroller.create);
    app.route("/client/:id").delete(this.clientcontroller.delete);
    app.route("/client/:id").patch(this.clientcontroller.update);

  }
}