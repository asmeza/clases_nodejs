import { Request, Response } from 'express';
import { Token } from '../config/token'
import { User } from '../models/User';


var tokens: Token = new Token();

export class Autenticate {

  public auth = async (req:Request, res:Response, next:any) => {
    try{
        const authHeader = req.header('Authorization'); 
        if(authHeader){
            const token:string = authHeader.replace((/['"]+/g), '').trim();
            const user: User|any =await tokens.validate(token, res)
            req.body = user;
            next();
        }else{
          return res.status(404).json({ message: 'Fatal Error: Token de Verificación Faltante'})
        }
      
    }catch(e){
        if (e.statusCode) {
            return res.status(e.statusCode).send({ error: e.message })
        }
        res.status(401).send({error: e.message});
    }
    }

 }


