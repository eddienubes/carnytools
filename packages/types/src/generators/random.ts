import crypto from 'node:crypto';

export const randomString = (length = 10): string => {
  // hex is 2 characters per byte
  return crypto.randomBytes(length / 2).toString('hex');
};
