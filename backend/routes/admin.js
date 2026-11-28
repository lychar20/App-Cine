import express from 'express';
const router = express.Router();
import { adminSignup, adminLogin, getEntityUsers, exportEntityUsers, getEntityScores, exportEntityScores } from '../controllers/admin.js';

router.post('/signup', adminSignup);
router.post('/login', adminLogin);
router.get('/users', getEntityUsers);
router.get('/users/export', exportEntityUsers);
router.get('/scores', getEntityScores);
router.get('/scores/export', exportEntityScores);

export default router;
