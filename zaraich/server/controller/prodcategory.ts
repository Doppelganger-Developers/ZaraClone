import { Request, Response } from "express";
import { getKidsCategory,getMenCategory,getWomenCategory } from "../modules/prodcategory";

const getMenC = async (req: Request, res: Response):Promise<void>=> {
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getMenCategory(callback);
  };
const getWomenC = async (req: Request, res: Response):Promise<void>=> {
    
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getWomenCategory(callback);
  };
const getKidsC = async (req: Request, res: Response):Promise<void>=> {
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getKidsCategory(callback);
  };
export {getKidsC,getMenC,getWomenC}