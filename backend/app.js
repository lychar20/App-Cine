/* const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const scoreRoutes = require('./routes/score')
const path = require('path'); 
const score = require('./models/score'); */

import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'; 
import scoreRoutes from './routes/score.js'; 
import path from 'path';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());

dotenv.config();

mongoose.connect(process.env.SECRET_DB,
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

    /* const cors = require("cors");
    app.use(cors()); */
    

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


  app.use('/api/auth', scoreRoutes);
  app.use('/api/auth', userRoutes); 

  app.get('/api/getTweet', (req, res, next) => {
    res.send("You mother fucker")
   
    res.status(200).json(stuff);
  });
 

//module.exports = app;

export default app;