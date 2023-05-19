import { Request, Response } from "express";
import { getKidsCategory,getMenCategory,getWomenCategory } from "../modules/prodcategory";

const getMenC = async (req: Request, res: Response):Promise<void>=> {
    const category=req.params.productcategory
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getMenCategory(callback,category);
  };
const getWomenC = async (req: Request, res: Response):Promise<void>=> {
    const category=req.params.productcategory
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getWomenCategory(callback,category);
  };
const getKidsC = async (req: Request, res: Response):Promise<void>=> {
    const category=req.params.productcategory
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getKidsCategory(callback,category);
  };
export {getKidsC,getMenC,getWomenC}