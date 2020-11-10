import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Product } from '../models/Product';


export class TypeProduct extends Model {
    
  public name!: string;
  
}

export interface TypeProductI {

  name: string;

}

TypeProduct.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false

    }
    
  },
  {
    tableName: "TypeProducts",
    sequelize: database,
    timestamps: true
  }
  

);

TypeProduct.hasMany(Product);
Product.belongsTo(TypeProduct);