import { Router } from 'express';
import GeneralInfo from './generalInfo.route';
import CheckCredentialsRoute from './checkCredentials.route';
import CpuRoute from './cpu.route';
import MemoryRoute from './memory.route';
import NetworkRoute from './network.route';
import StatusRoute from './status.route';
import StorageRoute from './storage.route';
import SystemRoute from './system.route';

const router: Router = Router();

router.get('/check-credentials', CheckCredentialsRoute);
router.get('/general-info', GeneralInfo);
router.get('/cpu', CpuRoute);
router.get('/memory', MemoryRoute);
router.get('/system', SystemRoute)
router.get('/storage', StorageRoute)
router.get('/network', NetworkRoute)
router.get('/status', StatusRoute)

export default router;