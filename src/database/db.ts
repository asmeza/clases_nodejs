const Sequelize = require('sequelize');

const DB_NAME = 'factura_mysql_node';

const DB_USER = 'asmeza';

const DB_PASS = '0822alan**';

export const database = new Sequelize(
	DB_NAME,
	DB_USER,
	DB_PASS,
	{
		host: 'localhost',
		dialect: 'mysql',
		port: 33065
	}
	
);

database.sync( { force: true} )
	.then(function (){
		console.log("Base de datos creada correctamente...")
	})