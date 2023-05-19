import { getAllHelp } from "../modules/help";
import { Request, Response } from "express";
const getHelp = async (req: Request, res: Response):Promise<void>=> {
    const callback = (err: any, result: any) => {
      if (err) res.status(500).send(err);
      else res.status(200).send(result);
    };
    getAllHelp(callback);
  };
  export {getHelp}