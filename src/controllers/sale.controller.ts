import { Request, Response } from 'express';
import { Sale } from '../models/Sale'

export class SaleController{

   public async index(req: Request, res: Response) {
    let Sales: Array<Sale>;
    try {
      Sales = await Sale.findAll();
      res.json(Sales)
    } catch (error) {
      res.status(500).json(error)
      
    }

  } 

}