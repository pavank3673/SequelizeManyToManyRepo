import { Group } from '../models/index';

export const newGroup = async (body) => {
  const data = await Group.create(body);
  return data;
};

export const getGroup = async (id) => {
  const data = await Group.findOne({
    where: { groupId: id },
    include: User
  });
  return data;
};

export const addUserToGroup = async (group, user) => {
  const data = await group.addUser(user);
  await user.addGroup(group);
  return data;
};
