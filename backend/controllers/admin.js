import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/admin.js';
import User from '../models/user.js';

const JWT_SECRET = 'RANDOM_TOKEN_SECRET';
const ADMIN_JWT_SECRET = 'ADMIN_TOKEN_SECRET';

export const adminSignup = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const admin = new Admin({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      entity: req.body.entity,
    });
    await admin.save();
    res.status(201).json({ message: 'Admin créé !' });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      return res.status(401).json({ message: 'Identifiants incorrects' });
    }
    const valid = await bcrypt.compare(req.body.password, admin.password);
    if (!valid) {
      return res.status(401).json({ message: 'Identifiants incorrects' });
    }
    const token = jwt.sign(
      { adminId: admin._id, entity: admin.entity },
      ADMIN_JWT_SECRET
    );
    res.status(200).json({ status: 'ok', token, entity: admin.entity });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getEntityUsers = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token manquant' });

    const decoded = jwt.verify(token, ADMIN_JWT_SECRET);
    const users = await User.find({ entity: decoded.entity }).select(
      'name email entity createdAt'
    );
    res.status(200).json({ status: 'ok', users });
  } catch (error) {
    res.status(401).json({ message: 'Token invalide' });
  }
};

export const exportEntityUsers = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token manquant' });

    const decoded = jwt.verify(token, ADMIN_JWT_SECRET);
    const users = await User.find({ entity: decoded.entity }).select(
      'name email entity createdAt'
    );

    const header = 'Nom,Email,Entité,Date inscription\n';
    const rows = users
      .map(u => `${u.name},${u.email},${u.entity},${u.createdAt?.toISOString() ?? ''}`)
      .join('\n');
    const csv = header + rows;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="users_${decoded.entity}.csv"`);
    res.status(200).send(csv);
  } catch (error) {
    res.status(401).json({ message: 'Token invalide' });
  }
};
