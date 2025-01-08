import HttpStatus from 'http-status-codes';
import * as AddressService from '../services/address.service';

export const newAddress = async (req, res, next) => {
  try {
    const data = await AddressService.newAddress(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Address created successfully'
    });
  } catch (error) {
    res.status(HttpStatus.CONFLICT).json({
      code: HttpStatus.CONFLICT,
      message: `${error}`
    });
  }
};
