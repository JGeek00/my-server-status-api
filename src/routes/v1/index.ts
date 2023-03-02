import { Router } from 'express';
import CpuRoute from './cpu.route';
import MemoryRoute from './memory.route';
import NetworkRoute from './network.route';
import StorageRoute from './storage.route';
import SystemRoute from './system.route';

const router = Router();

router.get('/cpu', CpuRoute);
router.get('/memory', MemoryRoute);
router.get('/system', SystemRoute)
router.get('/storage', StorageRoute)
router.get('/network', NetworkRoute)

export default router;