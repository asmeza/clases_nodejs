import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';


export class ProductSale extends Model {
  public cantidad!: number;
  public precio!: number;
  
}


export interface ClientSaleI {
  cantidad: number;
  precio: number;

}

ProductSale.init(
  {
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false

    },

  },
  {
    tableName: "Product_Sales",
    sequelize: database,
    timestamps: true
  }
  

);