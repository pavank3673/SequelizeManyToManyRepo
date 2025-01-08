import HttpStatus from 'http-status-codes';
import * as groupService from '../services/group.service';
import { getUser } from '../services/user.service';

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

export const addUserToGroup = async (req, res, next) => {
  try {
    const user = await getUser(req.body.userId);
    const group = await groupService.getGroup(req.params.id);
    const data = await groupService.addUserToGroup(group, user);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User added to group successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};
