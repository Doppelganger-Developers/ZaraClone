import express, { Router } from 'express';
import { getMen,getOneP } from '../controller/product';

const prouter: Router = express.Router();

prouter.get("/men",getMen)
prouter.get("/men/:productid",getOneP)


export default prouter;