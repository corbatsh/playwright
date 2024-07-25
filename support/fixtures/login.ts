import { ILoginData } from '../util/types';

export const loginData = {
  username: 'test123',
  password: 'test123',
} satisfies ILoginData;

export const invalidLoginData = {
  username: 'test',
  password: 'secret',
} satisfies ILoginData;
