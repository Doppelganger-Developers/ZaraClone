import { postOneUser, getOneUser, getAllUsers} from "../modules/user";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
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


const getUsers = (req: any, res: any) => {
  const callback = (err: any, result: any) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(result);
  };
  getAllUsers(callback);
};
const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const dbUser: any = await getOneUser(req.body.useremail);
    if (!dbUser || dbUser.length === 0) {
      res.status(404).send("Non-existing user");
      return;
    }

    const matchedPassword = await bcrypt.compare(
      req.body.userpw,
      dbUser[0].userpw
    );

    if (matchedPassword) {
      const token = jwt.sign(
        {
          userId: dbUser[0].userid,
          userEmail: dbUser[0].useremail
        },
        "123"
      );
      res.cookie('jwt', token, { httpOnly: true });

      res.status(200).json({
        token: token,
        message: "Authentication successful",
        name:dbUser[0].username
      });
    } else {
      res.status(400).send("Wrong password");
    }
  } catch (error) {
    res.status(400).send("Problem with login");
  }
};

export { postOn,getUsers,loginUser };