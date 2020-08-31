import { Router } from 'express';
import UsersController from './controller/UsersController';

const router = Router();

router.get('/', (_req, res, _next) => {
  res.status(200).send({
    title: 'API megabotwpp',
    version: '0.0.1',
  });
});

router.get('/users', UsersController.index);
router.post('/users', UsersController.create);

export default router;
