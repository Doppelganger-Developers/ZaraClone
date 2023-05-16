import express, { Router } from 'express';
import { postOn,getUsers } from '../controller/user';

const router: Router = express.Router();
router.post('/', postOn);
router.get('/', getUsers);


export default router;