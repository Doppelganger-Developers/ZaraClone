import {getAllMen,getOneProduct,getAllWommen,getAllEnfants, getAllBeauty,getAll} from "../modules/product"
import { Request, Response } from "express";

const get = async (req: Request, res: Response):Promise<void>=> {
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getAll(callback);
  };

const getMen = async (req: Request, res: Response):Promise<void>=> {
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getAllMen(callback);
  };

  const getWommen = async (req: Request, res: Response):Promise<void>=> {
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getAllWommen(callback);
  };
  const getEnfants = async (req: Request, res: Response):Promise<void>=> {
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getAllEnfants(callback);
  };
  const getBeauty = async (req: Request, res: Response):Promise<void>=> {
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getAllBeauty(callback);
  };
  const getOneP =async (req: Request, res: Response):Promise<void>=> {
   try{
     const one=req.params.productname;
     const prod =await getOneProduct(one)
    res.status(200).send(prod);
}
 catch (error) {
    res.status(500).send(error);
  }
  }
  export{getMen,getWommen,getEnfants,getBeauty,getOneP,get}