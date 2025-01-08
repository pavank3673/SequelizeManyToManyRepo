import express from 'express';
import * as groupController from '../controllers/group.controller';
import { newGroupValidator } from '../validators/group.validator';

const router = express.Router();

router.post('', newGroupValidator, groupController.newGroup);

router.put('/:id', groupController.addUserToGroup);

router.get('/:id', groupController.getGroup);

export default router;
