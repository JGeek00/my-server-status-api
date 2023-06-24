import { Router } from 'express';
import GeneralInfo from './generalInfo.route';
import CheckCredentialsRoute from './checkCredentials.route';
import CpuRoute from './cpu.route';
import MemoryRoute from './memory.route';
import NetworkRoute from './network.route';
import StatusRoute from './status.route';
import StorageRoute from './storage.route';
import SystemRoute from './system.route';
import OsRoute from './os.route';
import ApiVersionRute from './apiVersion.route';
import ShutdownRoute from './shutdown.route';
import RebootRoute from './reboot.route';
import DockerRoutes from './docker'

const router: Router = Router();

router.get('/check-credentials', CheckCredentialsRoute);
router.get('/api-version', ApiVersionRute);
router.get('/general-info', GeneralInfo);
router.get('/cpu', CpuRoute);
router.get('/memory', MemoryRoute);
router.get('/system', SystemRoute);
router.get('/storage', StorageRoute);
router.get('/network', NetworkRoute);
router.get('/status', StatusRoute);
router.get('/os', OsRoute);
router.get('/shutdown', ShutdownRoute);
router.get('/reboot', RebootRoute);

router.use('/docker', DockerRoutes);

export default router;