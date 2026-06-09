/* const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user'); */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const JWT_SECRET = 'RANDOM_TOKEN_SECRET'

export const signup  = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          name: req.body.name,
          password: hash
        });
        console.log("NAME", req.body.name);
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };


  //////


  export const login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte '});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte ' });
                    }
                    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET);
                    res.status(200).json({
                      status: "ok",
                      data: token,
                      userType: user.userType
                    });


                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
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

