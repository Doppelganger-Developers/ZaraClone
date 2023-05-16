const express = require('express');
const router = express.Router();
import postOn from "../controller/user"
router.post("/",postOn)

module.exports= {router}