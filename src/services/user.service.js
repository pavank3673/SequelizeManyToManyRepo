import { User, Group, UserGroups } from '../models/index';

export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

export const getUser = async (id) => {
  const data = await User.findOne({
    where: { userId: id },
    include: Group
  });
  return data;
};
