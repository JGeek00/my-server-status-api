import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import RouterV1 from './v1';

const router: Router = Router();

router.use('/v1', authMiddleware, RouterV1)

router.get('*', (req, res) => {
  res.status(404).send("Endpoint not found")
})

export default router;