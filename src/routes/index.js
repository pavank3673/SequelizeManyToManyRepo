import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import groupRoute from './group.route';

const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/groups', groupRoute);

  return router;
};

export default routes;
