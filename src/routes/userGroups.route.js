import express from 'express';
import * as UserGroupsController from '../controllers/userGroups.controller';

const router = express.Router();

router.get('/:id', UserGroupsController.getUserGroupsByUser);

export default router;
