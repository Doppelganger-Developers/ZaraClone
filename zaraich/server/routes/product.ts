import express, { Router } from 'express';
import { getBeauty, getEnfants, getMen,getOneP, getWommen } from '../controller/product';

const prouter: Router = express.Router();

prouter.get("/men",getMen)
prouter.get("/men/one",getOneP)
prouter.get("/wommen",getWommen)
prouter.get("/enfants",getEnfants)
prouter.get("/beuaty",getBeauty)

export default prouter;