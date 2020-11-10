import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Sale } from './Sale'
import { ProductSale } from './Product_Sale';


export class Product extends Model {
    
  public nombre!: string;
  public marca!: string;
  public precio!: string;
  public stockMin!: string;
  public cantidad!: string;
   
}

export interface ProductI {

  nombre: string;
  marca: string;
  precio: string;
  stockMin: string;
  cantidad: string;
}

Product.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false

    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false

    },

    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    stockMin: {
      type: DataTypes.FLOAT,
      allowNull: false

    },
    
    cantidad: {
      type: DataTypes.FLOAT,
      allowNull: false

    },
    
  },
  {
    tableName: "products",
    sequelize: database,
    timestamps: true
  }
  

);

Product.belongsToMany(Sale, { through: ProductSale });
Sale.belongsToMany(Product, { through: ProductSale });
