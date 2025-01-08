import HttpStatus from 'http-status-codes';
import * as groupService from '../services/group.service';

export const newGroup = async (req, res, next) => {
  try {
    const data = await groupService.newGroup(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Group created successfully'
    });
  } catch (error) {
    res.status(HttpStatus.CONFLICT).json({
      code: HttpStatus.CONFLICT,
      message: `${error}`
    });
  }
};
