import express, { Router } from 'express';
import { getMenC,getWomenC,getKidsC } from '../controller/prodcategory';
const crouter: Router = express.Router();

crouter.get("/:productcategory",getMenC)
crouter.get("/:productcategory",getWomenC)
crouter.get("/:productcategory",getKidsC)

export default crouter;