import { Request, Response, Application } from 'express';
import { UserController } from '../controllers/user.controller';
import { Autenticate} from '../middleware/auth'

var auth = new Autenticate()


export class UserRoutes{
  userController: UserController = new UserController();

  public rutas(app: Application): void{
    app.route("/users").get( auth.auth, this.userController.getAll);
    app.route("/user").get(this.userController.getOne);
    app.route("/user").post(this.userController.create);
    app.route("/login").post(this.userController.login);
    app.route("/user/delete/:id").delete(this.userController.delete);
    app.route("/user/update/:id").patch(this.userController.update);
    
  }
}