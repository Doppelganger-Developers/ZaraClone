import express, { Router } from 'express';
import { postOn,getUsers,loginUser } from '../controller/user';

const router: Router = express.Router();
router.post('/', postOn);
router.get('/', getUsers);
router.post("/login",loginUser)

export default router;