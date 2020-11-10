import { Request, Response } from 'express';
import { User, UserI, Login } from '../models/User';
import { Token } from '../config/token'
const bcrypt = require('bcryptjs');

var token: Token = new Token();

export class UserController{


   public async getAll(req: Request, res: Response) {
    let users: Array<User>;
    try {
      users = await User.findAll();
      res.json(users)
    } catch (error) {
      res.status(500).json(error) 
    }
  }
  
  public async getOne(req: Request, res: Response) {
    let user: User | any;
   try {
    user = await User.findByPk(req.params.id);
     res.json(user)
   } catch (error) {
     res.status(500).json(error) 
   }
  } 
  
  public async create(req: Request, res: Response) {
    let user: User = req.body;
    try {
      const dataUser: User = await User.create(user);
      res.json(dataUser)
    } catch (error) {

      if (error.name === "SequelizeValidationError") {

        return res.status(400).send(error.message);

      } else if (error.name === "SequelizeUniqueConstraintError") {

        return res.status(400).send({ Message: "El email que deseas ingresar ya esta registrado" });
      }
      res.status(500).json(error)
      
    }

  } 

  public async login(req: Request, res: Response) {
    try {
      let param:Login = req.body;
      let validateEmail = !param.email || param.email === undefined;
      let validatePassword = !param.password || param.password === undefined;

      if (validateEmail || validatePassword) {
        return res.status(400).send("¡Credenciales invalidas, Verifique sus datos!");
      }
      let user: User | any = await User.findOne({
        where: {
          email: param.email.toLowerCase(),
        },
      });
      if (!user) {
        return res.status(400).send("¡Credenciales invalidas, Verifique sus datos!");
      }
      const isValid = await bcrypt.compare(req.body.password, user.password);
      if (!isValid) {
        return res.status(400).send("¡Credenciales invalidas, Verifique sus datos!");
      }
      await token.generateToken(user, res)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)

    }
  }


  
  public async delete(req: Request, res: Response) {
    let user: User | any;
    try {
      user = await User.findByPk(req.params.id);
      if(user)
      {
         await User.destroy({where:{
          id: user.id
        }});
        res.send({ message: "Registro Eliminado" });
      }else{
        return res.status(404).json({ message: "Usuario no encontrado"} )
      }
         
    } catch (error) {
      res.status(500).json(error)
      
    }

  } 

  public async update(req: Request, res: Response) {
    let user: User | any;
    let param: any = req.body;
    try {
      user = await User.findByPk(req.params.id);
      if(user)
      {
         await User.update(param, {where:{
          id: user.id
        }});
       let dataUser: User | any = await User.findByPk(req.params.id);
       res.json(dataUser)
      }else{
        return res.status(404).json({ message: "Usuario no encontrado"} )
      }
         
    } catch (error) {
      res.status(500).json(error)
      
    }

  } 

}