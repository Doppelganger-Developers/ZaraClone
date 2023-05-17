import express, { Router } from 'express';
import { getMen,getOneP } from '../controller/product';

const prouter: Router = express.Router();

prouter.get("/men",getMen)
prouter.get("/men/one",getOneP)


export default prouter;