/* const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user'); */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/user.js';
import Admin from '../models/admin.js';
import { sendVerificationEmail } from '../services/emailService.js';

const JWT_SECRET = 'RANDOM_TOKEN_SECRET'

export const signup = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: hash,
      entity: req.body.entity || 'default',
      isVerified: false,
      verificationToken,
    });

    await user.save();
    await sendVerificationEmail(req.body.email, verificationToken);

    res.status(201).json({ message: 'Compte créé ! Vérifiez votre email pour activer votre compte.' });
  } catch (error) {
    res.status(400).json({ error });
  }
};


  //////


  export const login = async (req, res, next) => {
    try {
      // Cherche d'abord dans les admins
      const admin = await Admin.findOne({ email: req.body.email });
      if (admin) {
        const valid = await bcrypt.compare(req.body.password, admin.password);
        if (!valid) return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
        const token = jwt.sign({ adminId: admin._id, entity: admin.entity }, 'ADMIN_TOKEN_SECRET');
        return res.status(200).json({ status: 'ok', data: token, userType: 'admin', entity: admin.entity });
      }

      // Sinon cherche dans les users
      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
      const valid = await bcrypt.compare(req.body.password, user.password);
      if (!valid) return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
      if (!user.isVerified) return res.status(403).json({ message: 'Veuillez vérifier votre email avant de vous connecter.' });
      const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET);
      return res.status(200).json({ status: 'ok', data: token, userType: 'user' });

    } catch (error) {
      res.status(500).json({ error });
    }
 };



//////////




///// test ici /////

/* exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body);
    const oldUser = await User.findOne({ email: email });
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
  
    if (await bcrypt.compare(password, oldUser.password)) {
      const token = jwt.sign({ userId: oldUser._id, email: oldUser.email }, JWT_SECRET);
      console.log(token);
      if (res.status(201)) {
        return res.send({
          status: "ok",
          data: token,
          userType: oldUser.userType,
        });
      } else {
        return res.send({ error: "error" });
      }
    }
  }; */


///// jusqu'a la   ///////






export const verifyEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ verificationToken: req.params.token });
    if (!user) return res.status(400).send('<h2>Lien invalide ou expiré.</h2>');
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    res.send('<h2 style="font-family:Arial;color:green;text-align:center;margin-top:50px">✅ Email vérifié ! Vous pouvez maintenant vous connecter sur l\'application.</h2>');
  } catch (error) {
    res.status(500).send('<h2>Erreur serveur.</h2>');
  }
};

export const getData = async (req, res, next) => {
    let { token } = req.body;
    console.log('Token reçu :', token); // Log du token reçu
    token = token.replace(/"/g, "")
   
    try {
      const user = jwt.verify(token, JWT_SECRET);
      const userId = user.userId; // Récupérer l'ID utilisateur
      const useremail = user.email;
      console.log("INFORMATION", useremail, userId);
  
  /*     User.findOne({ email: useremail }).then((data) => {
        return res.send({ status: "Ok", data: data }); */

         // Rechercher l'utilisateur par ID
         User.findById(userId).then((data) => {
          return res.send({ status: "Ok", data: data });
      });
    } catch (error) {
        console.error("Erreur de vérification du token ou de récupération des données :", error); // Log de l'erreur
        return res.status(500).send({ message: "Erreur de récupération des données" });
    }
};


export const getUserById = async (req, res, next) => {
  
  try {
    const user = await User.findById(req.params.id).select('name'); // Sélectionner uniquement le champ "name"
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "Utilisateur non trouvé" });
    }
} catch (error) {
    res.status(500).json({ error: error.message });
}


};

