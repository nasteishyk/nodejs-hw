import { celebrate } from 'celebrate';
import { Router } from 'express';
import { loginUser, logoutUser, refreshUserSession, registerUser } from '../controllers/authController';
import { loginUserSchema, registerUserSchema } from '../validations/authValidation';
import { authenticate } from '../middleware/authenticate';

const router = Router();

router.use("/auth", authenticate);

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);

export default router;
