import { HttpException, HttpStatus } from '@nestjs/common';
import * as crypto from 'crypto';

import { BAD_REQUEST } from '../common/constants/error';
export const createHash = (password: string): string => {
  return Buffer.from(
    crypto.createHash('sha256').update(password, 'utf8').digest('hex'),
  ).toString();
};

export const generateToken = () =>
  (Math.random() + 1).toString(36).substring(7);

export const compareHash = async (password: string): Promise<String> => {
  const passwordResult = Buffer.from(
    crypto.createHash('sha256').update(password, 'utf8').digest('hex'),
  ).toString();
  return passwordResult;
};

export const validatePassword = (password: string) => {
  if (password.trim() == '' || password.trim() == 'null')
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        error: BAD_REQUEST,
      },
      HttpStatus.BAD_REQUEST,
    );
};
