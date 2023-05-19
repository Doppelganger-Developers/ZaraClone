import express, { Router } from 'express';
import { getBeauty, getEnfants, getMen,getOneP, getWommen,get } from '../controller/product';

const prouter: Router = express.Router();

prouter.get("/products",get)
prouter.get("/men",getMen)
prouter.get("/:productname",getOneP)
prouter.get("/wommen",getWommen)
prouter.get("/enfants",getEnfants)
prouter.get("/beuaty",getBeauty)

export default prouter;