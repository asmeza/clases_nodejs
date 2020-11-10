import { Request, Response } from 'express';
const jwt = require('jsonwebtoken')
import { User } from '../models/User';

const keys_token: string = 'este_es_mi_token';



export class Token{

  public async generateToken(user: any, res: Response) {

        const payload: any|User = {
          id: user.id.toString(),
          email: user.email.toString(),
          document: user.document.toString()
    };
    
        const token:any = jwt.sign(payload, keys_token, {expiresIn:300})
        await User.update({token},{
            where:{
                id:user.id
            }
        })
        const dataUser:User | any = await User.findByPk(user.id);
        return res.status(201).send( dataUser );
        
    }

    public async validate(token:any, res:Response) {
        try {
          const decode = jwt.verify(token, keys_token);
          const user = await User.findOne({
            where: {
              id: decode.id,
              email:decode.email,
              document:decode.document,
              token,
            },
          });
          if (!user) {
              return res.status(404).json({ message: "Usuario sin token" });
          }
          return user;
        } catch (ex) {
          console.log(ex);
          if (ex.expiredAt) {
              return res.status(404).json({ message: "Lo sentimos, la sesión ha expirado. Inicie sesión continuar" });
          } else {
              return res.status(404).json({ message: "Usuario no Autorizado" });
          }
        }
      }

}