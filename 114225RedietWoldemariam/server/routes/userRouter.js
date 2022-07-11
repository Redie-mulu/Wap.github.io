const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// we only need to post 
router.post('/', userController.save);