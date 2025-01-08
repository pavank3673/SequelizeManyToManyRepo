import express from 'express';
import * as groupController from '../controllers/group.controller';
import { newGroupValidator } from '../validators/group.validator';

const router = express.Router();

router.post('', newGroupValidator, groupController.newGroup);

export default router;