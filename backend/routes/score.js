//const express = require('express');
import express from 'express';
const router = express.Router();
//const scoreCtrl = require('../controllers/score'); 
import { saveScore, getLatestScore, getAllScore } from '../controllers/score.js';


router.post('/save-score', saveScore ); 
router.get('/get-latest-score', getLatestScore );  
router.get('/get-all-score', getAllScore); 



//module.exports = router; 

export default router;