import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db'

export class Sale extends Model {
    
  public fechaVenta!: string;
  public subtotal!: string;
  public impuestos!: string;
  public descuentos!: string;
  public total!: string;   
  
}
export interface SaleI {

  fechaVenta: string;
  subtotal: string;
  impuestos: string;
  descuentos: string;
  total: string;  

}
Sale.init(
  {
    fechaVenta: {
      type: DataTypes.STRING,
      allowNull: false

    },
    subtotal: {
      type: DataTypes.FLOAT,
      allowNull: false

    },

    impuestos: {
      type: DataTypes.FLOAT,
      allowNull: false

    },

    descuentos: {
      type: DataTypes.FLOAT,
      allowNull: false

    },
    
    total: {
      type: DataTypes.FLOAT,
      allowNull: false

    },
    
  },
  {
    tableName: "Sales",
    sequelize: database,
    timestamps: true
  }
  

);