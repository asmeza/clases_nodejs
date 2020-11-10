import { Request, Response } from 'express';
import { Client, ClientI } from '../models/Client';

export class ClientController{

   public async getAll(req: Request, res: Response) {
    let Clients: Array<Client>;
    try {
      Clients = await Client.findAll();
      res.json(Clients)
    } catch (error) {
      res.status(500).json(error) 
    }
  }
  
  public async getOne(req: Request, res: Response) {
    let Clients: Client | any;
   try {
     Clients = await Client.findByPk(req.params.id);
     res.json(Clients)
   } catch (error) {
     res.status(500).json(error) 
   }
  } 
  
  public async create(req: Request, res: Response) {
    let Clients: ClientI = req.body;
    try {
      const dataClient: ClientI = await Client.create(Clients);
      res.json(dataClient)
    } catch (error) {
      res.status(500).json(error)
      
    }

  } 

  
  public async delete(req: Request, res: Response) {
    let client: Client | any;
    try {
      client = await Client.findByPk(req.params.id);
      if(client)
      {
         await Client.destroy({where:{
          id: client.id
        }});
        res.send({ message: "Registro Eliminado" });
      }else{
        return res.status(404).json({ message: "Cliente no encontrado"} )
      }
         
    } catch (error) {
      res.status(500).json(error)
      
    }

  } 

  public async update(req: Request, res: Response) {
    let client: Client | any;
    let param: any = req.body;
    try {
      client = await Client.findByPk(req.params.id);
      if(client)
      {
         await Client.update(param, {where:{
          id: client.id
        }});
       let dataClient: Client | any = await Client.findByPk(req.params.id);
       res.json(dataClient)
      }else{
        return res.status(404).json({ message: "Cliente no encontrado"} )
      }
         
    } catch (error) {
      res.status(500).json(error)
      
    }

  } 

}