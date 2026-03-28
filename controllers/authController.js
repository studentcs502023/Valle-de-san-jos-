const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Registro de usuarios
exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ msg: 'El correo electrónico ya está registrado.' });
        }

        const newUser = new User({ username, email, password, role });
        await newUser.save();

        res.status(201).json({ msg: `Usuario (${newUser.role}) registrado exitosamente.` });
    } catch (err) {
        res.status(500).json({ msg: 'Error al registrar el usuario.', error: err.message });
    }
};

// Login de usuarios
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Credenciales inválidas.' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas.' });
        }

        // Generar Token JWT
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            msg: 'Inicio de sesión exitoso.',
            token,
            user: { id: user._id, username: user.username, email: user.email }
        });
    } catch (err) {
        res.status(500).json({ msg: 'Error al iniciar sesión.', error: err.message });
    }
};

// Perfil de usuario (Dashboard)
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ msg: 'Error al obtener el perfil.', error: err.message });
    }
};
