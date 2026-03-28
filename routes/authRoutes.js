const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

// Rutas de autenticación
router.post('/register', authController.register);
router.post('/login', authController.login);

// Ruta protegida (Dashboard / Perfil)
router.get('/profile', auth, authController.getProfile);

// --- RUTAS CRUD ADICIONALES ---
router.get('/users', auth, authController.getAllUsers);           // Obtener todos
router.put('/user/:id', auth, authController.updateUser);        // Actualizar por ID
router.delete('/user/:id', auth, authController.deleteUser);     // Eliminar por ID

module.exports = router;
