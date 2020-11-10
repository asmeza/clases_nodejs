
import { ClientRoutes } from './client';
import { ProductRoutes } from './product';
import { TypeProductRoutes } from './typeProduct';
import { SaleRoutes } from './sale';
import { UserRoutes } from './user';


export class Routes{

  public userRoutes: UserRoutes = new UserRoutes()
  public clientRoutes: ClientRoutes = new ClientRoutes()
  public productRoutes: ProductRoutes = new ProductRoutes()
  public typeProductRoutes: TypeProductRoutes = new TypeProductRoutes()
  public saleRoutes: SaleRoutes = new SaleRoutes()
  
}