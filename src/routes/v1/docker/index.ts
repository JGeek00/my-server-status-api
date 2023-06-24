import { Router } from 'express';
import InformationRoute from './information.route';
import ImagesRoute from './images.route';
import ContainersRoute from './containers.route';

const router: Router = Router();

router.get('/information', InformationRoute)
router.get('/images', ImagesRoute)
router.get('/containers', ContainersRoute)

export default router;