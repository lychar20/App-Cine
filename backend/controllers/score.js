/* const jwt = require('jsonwebtoken');

const Score = require('../models/score'); */

import jwt from 'jsonwebtoken';
import Score from '../models/score.js'

const JWT_SECRET = 'RANDOM_TOKEN_SECRET'



export const saveScore = async (req, res, next) => {
    let { token, score, roomId } = req.body;
    token = token.replace(/"/g, "");

    if (!token || score === undefined) {
        return res.status(400).json({ message: "Token ou score manquant" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.userId;

        const newScore = new Score({ userId, score, roomId: roomId || null });
        await newScore.save();

        return res.status(201).json({ message: "Score sauvegardé avec succès" });

    } catch (error) {
        console.error("Erreur lors de la sauvegarde du score :", error);
        return res.status(500).json({ message: "Erreur lors de la sauvegarde du score" });
    }
};

export const getScoresByRoom = async (req, res, next) => {
    const { roomId } = req.params;
    try {
        const scores = await Score.find({ roomId }).populate('userId', 'name').sort({ score: -1 });
        const result = scores.map(s => ({
            _id: s._id,
            score: s.score,
            userName: s.userId?.name || 'Joueur',
        }));
        return res.status(200).json(result);
    } catch (error) {
        console.error("Erreur getScoresByRoom:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
};


export const getLatestScore = async (req, res, next) => {
    let token = req.headers.authorization?.split(' ')[1]; // Récupérer le token à partir des en-têtes
    token = token.replace(/"/g, "")
    console.log("DEUXIEME TOKEN", token);
    

    if (!token) {
        return res.status(400).json({ message: "Token manquant" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Vérifiez le token
        const userId = decoded.userId; // Récupérez l'ID utilisateur

        // Trouvez le dernier score de l'utilisateur
        const latestScore = await Score.findOne({ userId }).sort({ createdAt: -1 });

        if (!latestScore) {
            return res.status(404).json({ message: "Aucun score trouvé pour cet utilisateur" });
        }

        return res.status(200).json({ score: latestScore.score });
        
    } catch (error) {
        console.error("Erreur lors de la récupération du score :", error);
        return res.status(500).json({ message: "Erreur lors de la récupération du score" });
        
    }


};


export const getAllScore = (req, res, next) => {
    Score.find()
    .sort({ score: -1, createdAt: -1  }) // Trier par score de manière décroissante
    .limit(10) // Limiter à 10 résultats
    .then((scores) => {
        res.status(200).json(scores);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };  

