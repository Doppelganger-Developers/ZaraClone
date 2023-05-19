import express, { Router } from 'express';
import { getHelp } from '../controller/help';

const hrouter: Router = express.Router();
hrouter.get('/help',getHelp)


export default hrouter