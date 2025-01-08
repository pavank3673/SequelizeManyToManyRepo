import express from 'express';
import * as AddressController from '../controllers/address.controller';
import { newAddressValidator } from '../validators/address.validator';

const router = express.Router();

router.post('', newAddressValidator, AddressController.newAddress);

export default router;
