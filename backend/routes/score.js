const express = require('express');
const router = express.Router();
const scoreCtrl = require('../controllers/score'); 


router.post('/save-score', scoreCtrl.saveScore ); 
router.get('/get-latest-score', scoreCtrl.getLatestScore );  
router.get('/get-all-score', scoreCtrl.getAllScore); 



module.exports = router; 