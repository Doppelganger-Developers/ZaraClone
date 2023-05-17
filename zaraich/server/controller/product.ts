import {getAllMen,getOneProduct} from "../modules/product"
import { Request, Response } from "express";

const getMen = async (req: Request, res: Response):Promise<void>=> {
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getAllMen(callback);
  };
  const getOneP =async (req: Request, res: Response):Promise<void>=> {
   try{
     const prod=req.body.productid;
    await getOneProduct(prod)
    res.status(20).send(prod);
}
 catch (error) {
    res.status(500).send(error);
  }
  }
  export{getMen,getOneP}