import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import RouterV1 from './v1';

const router: Router = Router();

router.use('/v1', authMiddleware, RouterV1)

export default router;