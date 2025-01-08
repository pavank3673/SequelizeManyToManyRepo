import { User } from '../models/index';

export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};
