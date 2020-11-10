import { Request, Response } from 'express';
import { Product } from '../models/Product';

export class ProductController{
  // public index(req: Request, res: Response) {
    
  //   Product.findAll()        //select * from Cliente
  //     .then(
  //       (Productos: Array<Product>) => res.json(Productos)
  //     )
        
  //     .catch(
  //       (err: Error) => res.status(500).json(err)
  //     );
  // }

  public async index(req: Request, res: Response) {
    let Products: Array<Product>;
    try {
      Products = await Product.findAll();
      res.json(Products)
    } catch (error) {
      res.status(500).json(error)
      
    }

  } 

}