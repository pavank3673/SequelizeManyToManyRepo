import HttpStatus from 'http-status-codes';
import * as UserGroupsService from '../services/userGroups.service'


export const getUserGroupsByUser = async (req, res, next) => {
    try {
      const data = await UserGroupsService.getUserGroupByUser(req.params.id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'User groups found successfully'
      });
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message: `${error}`
      });
    }
  };