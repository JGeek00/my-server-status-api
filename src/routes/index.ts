import { Router } from 'express';
import RouterV1 from './v1';

const router = Router();

router.use('/v1', RouterV1)

export default router;