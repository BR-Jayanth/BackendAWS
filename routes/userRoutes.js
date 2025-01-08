const express = require('express');
const { registerUser, loginUser,getAllUsers,getUserById } = require('../controllers/userController');
const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);

module.exports = router;
