import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Sale } from '../models/Sale';


export class Client extends Model {
}

export interface ClientI {
}

Client.init(
  {
  },
  {
    tableName: "clients",
    sequelize: database,
    timestamps: true
  }
);

Client.hasMany(Sale);
Sale.belongsTo(Client);