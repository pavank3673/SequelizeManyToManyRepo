import { Address } from '../models/index';

export const newAddress = async (body) => {
  const data = await Address.create(body);
  return data;
};
