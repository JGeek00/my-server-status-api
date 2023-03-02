import { Router } from 'express';
import CpuRoute from './cpu.route';
import MemoryRoute from './memory.route';
import SystemRoute from './system.route';

const router = Router();

router.get('/cpu', CpuRoute);
router.get('/memory', MemoryRoute);
router.get('/system', SystemRoute)

export default router;