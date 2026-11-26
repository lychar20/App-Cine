//const express = require('express');
import express from 'express';
const router = express.Router();
//const userCtrl = require('../controllers/user'); 
import { signup, login, getData, getUserById, verifyEmail } from '../controllers/user.js';

router.post('/signup', signup);
router.post('/login', login);
router.post('/userdata', getData );
router.get('/get-user/:id', getUserById );
router.get('/verify/:token', verifyEmail);


//module.exports = router; 

export default router;