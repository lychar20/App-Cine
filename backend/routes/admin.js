import express from 'express';
const router = express.Router();
import { adminSignup, adminLogin, getEntityUsers, exportEntityUsers } from '../controllers/admin.js';

router.post('/signup', adminSignup);
router.post('/login', adminLogin);
router.get('/users', getEntityUsers);
router.get('/users/export', exportEntityUsers);

export default router;
