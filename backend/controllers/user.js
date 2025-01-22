const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const JWT_SECRET = 'RANDOM_TOKEN_SECRET'

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };


  //////


 /*  exports.login = (req, res, next) => {
    //const user = req.body.email ;
    //const password = req.body.password;
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte Cine'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte Cinema' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            JWT_secret,
                            { expiresIn: '24h' }
                        )
                    });


                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 }; */



//////////




///// test ici /////

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.body);
    const oldUser = await User.findOne({ email: email });
  
    if (!oldUser) {
      return res.send({ data: "User doesn't exists!!" });
    }
  
    if (await bcrypt.compare(password, oldUser.password)) {
      const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);
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
  };


///// jusqu'a la   ///////



 /*exports.getData = async (req, res, next) => {
    const { token } = req.body;
    
    try{
        const user = jwt.verify(token, JWT_secret);
        const useremail = user.email;

        User.findOne({email: useremail}).then((data) => {
            return res.send({ status: "ok", data: data});
        });
    } catch (error) {
        return res.send({ message: "errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr damn"});
    }

 }; */


 

 /* exports.getData = async (req, res, next) => {
    const { token } = req.body;
    console.log('Token reçu :', token); // Log du token reçu

    if (!token) {
        console.error("Token manquant dans la requête");
        return res.status(400).send({ message: "Token manquant" });
    }

    try {
        const user = jwt.verify(token.token || token, JWT_secret); // Vérifiez le token
        const useremail = user.userId; // Utilisez le champ userId pour trouver l'utilisateur
        console.log('User ID :', useremail); // Log de l'ID utilisateur

        const data = await User.findOne({ email: useremail });
        if (data) {
            return res.send({ status: "ok", data: data });
        } else {
            console.error("Utilisateur non trouvé pour l'ID :", useremail);
            return res.status(404).send({ message: "Utilisateur non trouvé" });
        }
    } catch (error) {
        console.error("Erreur de vérification du token ou de récupération des données :", error); // Log de l'erreur
        return res.status(500).send({ message: "Erreur de récupération des données" });
    }
}; */



exports.getData = async (req, res, next) => {
    let { token } = req.body;
    console.log('Token reçu :', token); // Log du token reçu
    token = token.replace(/"/g, "")
   
    try {
      const user = jwt.verify(token, JWT_SECRET);
      const useremail = user.email;
      console.log("INFORMATION", useremail);
  
      User.findOne({ email: useremail }).then((data) => {
        return res.send({ status: "Ok", data: data });
      });
    } catch (error) {
        console.error("Erreur de vérification du token ou de récupération des données :", error); // Log de l'erreur
        return res.status(500).send({ message: "Erreur de récupération des données" });
    }
};


