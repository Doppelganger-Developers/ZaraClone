import express, { Router } from 'express';
import { getMenC,getWomenC,getKidsC } from '../controller/prodcategory';
const crouter: Router = express.Router();

crouter.get("/pmen",getMenC)
crouter.get("/pwomen",getWomenC)
crouter.get("/pkids",getKidsC)

export default crouter;