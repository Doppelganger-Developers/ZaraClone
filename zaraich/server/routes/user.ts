import express, { Router } from 'express';
import { postOn } from '../controller/user';

const router: Router = express.Router();
router.post('/', postOn);

export default router;