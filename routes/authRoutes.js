const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

// Rutas de autenticación
router.post('/register', authController.register);
router.post('/login', authController.login);

// Ruta protegida (Dashboard / Perfil)
router.get('/profile', auth, authController.getProfile);

module.exports = router;
