import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    res.status(HttpStatus.FORBIDDEN).json({
      code: HttpStatus.FORBIDDEN,
      message: `${error}`
    });
  }
};

export const getUser = async (req, res, next) => {
  try {
    const data = await UserService.getUser(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User fetched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};
