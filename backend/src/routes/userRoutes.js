import express from 'express';
import { UserController } from '../controllers/userController';
import { validateRegistration, validateLogin } from '../utils/validators';

const router = express.Router();
const { registerUser, loginUser } = new UserController();

router.post('/register', validateRegistration, registerUser);
router.post('/login', validateLogin, loginUser);

export default router;