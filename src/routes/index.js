import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import groupRoute from './group.route';
import addressRoute from './address.route';
import userGroupsRoute from './userGroups.route';

const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/groups', groupRoute);
  router.use('/address', addressRoute);
  router.use('/userGroups', userGroupsRoute);

  return router;
};

export default routes;
