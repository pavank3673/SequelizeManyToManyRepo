import { Group } from '../models/index';

export const newGroup = async (body) => {
  const data = await Group.create(body);
  return data;
};
