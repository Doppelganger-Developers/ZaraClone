import { postOneUser, getOneUser, getAllUsers} from "../modules/user";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

const postOn = async (req: Request, res: Response): Promise<void> => {
  try {
    const dbUser:any = await getOneUser(req.body.useremail);
    if (dbUser.length > 0) {
      res.status(409).send("User already exists");
      return;
    }
    const hashedPassword = await bcrypt.hash(req.body.userpw, 10);
    const user = {
      username: req.body.username,
      userpw: hashedPassword,
      useremail: req.body.useremail,
    };
    await postOneUser(user);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};


const getUsers = (req: Request, res: Response) => {
  const callback = (err: any, result: any) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(result);
  };
  getAllUsers(callback);
};


export { postOn,getUsers };