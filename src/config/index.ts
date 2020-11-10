import express, { Application } from 'express';
import morgan from 'morgan';

import {Routes} from '../routes/index';


export class App{
	app: Application;
	public routePrv: Routes = new Routes();
	
	constructor(private port?: number | string) {
		this.app = express();
		this.settings();
		this.middlewares();
		this.routes();

	}
	
	private routes() {
		this.routePrv.userRoutes.rutas(this.app)
		this.routePrv.clientRoutes.rutas(this.app)
		this.routePrv.productRoutes.rutas(this.app)
		this.routePrv.typeProductRoutes.rutas(this.app)
		this.routePrv.saleRoutes.rutas(this.app)
	}
  
	private middlewares(){
		this.app.use(morgan('dev'));
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: false}));
	}

	
	private settings(){
		this.app.set('port', this.port || process.env.PORT ||3000);
	}

	async listen(){
		await this.app.listen(this.app.get('port'));
		console.log('server en el puerto', this.app.get('port'));
		
	}
}