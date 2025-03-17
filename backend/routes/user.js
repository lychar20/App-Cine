const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user'); 

router.post('/signup', userCtrl.signup); 
router.post('/login', userCtrl.login);  
router.post('/userdata', userCtrl.getData );
router.get('/get-user/:id', userCtrl.getUserById )


module.exports = router; 