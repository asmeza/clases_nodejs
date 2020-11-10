import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';
import { Client } from './Client'

const bcrypt = require('bcryptjs');


export class User extends Model {
    
  public name!: string;
  public document!: string;
  public dateBirthday!: string;
  public gender!: string;
  public email!: string;
  public password!: string;
  public address!: string;
  public phone!: string; 
}


export interface UserI {

  name: string;
  document: string;
  dateBirthday: string;
  gender: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface Login {
  email: string;
  password: string;
}



User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z\s]+$/i,
        notEmpty: true,
        len: [3, 50],
      },

    },
    document: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[(]{0,1}[+]?[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
        len: [1, 10],
      },

    },

    dateBirthday: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },

    gender: {
      type: DataTypes.ENUM('masculino','femenino','otros'),
      allowNull: false
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        len: [5, 50],
      },
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 16],
      },
    },
    
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 50],
      },

    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[(]{0,1}[+]?[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
      },
    },
    token: {
      type: DataTypes.STRING,
    },
  },

  
  {
    tableName: "Users",
    sequelize: database,
    timestamps: true,

    hooks: {

      beforeCreate:  async (user: User) => {
        user.password = await bcrypt.hash(user.password, 8);
      },

      beforeUpdate: async ( user:User ) => {
        if (user.changed("password")) {
          user.password = await bcrypt.hash(user.password, 8);
        }
      },

    }

  }
);

User.hasOne(Client);
Client.belongsTo(User);