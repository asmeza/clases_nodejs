import { Request, Response } from 'express';
import { TypeProduct, TypeProductI } from '../models/TypeProduct';

export class TypeProductController{

  public async index(req: Request, res: Response) {
    let typeProducts: Array<TypeProduct>;
    try {
      typeProducts = await TypeProduct.findAll();
      res.json(typeProducts)
    } catch (error) {
      res.status(500).json(error)
      
    }

  } 

  public async add(req: Request, res: Response){
    try {
      let param:TypeProductI;
      param = req.body;
      let dataTypeProduct = await TypeProduct.create(param);
      res.json(dataTypeProduct)
    } catch (error) {
      res.status(500).json(error)
      
    }

  } 

}