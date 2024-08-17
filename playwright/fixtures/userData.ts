import { ILoginData, IRegistrationData } from '../support/utils/types';

const date = new Date();
const now = date.getTime;

export const loginData = {
  username: 'test123',
  password: 'test123',
} satisfies ILoginData;

export const invalidLoginData = {
  username: 'test',
  password: 'secret',
} satisfies ILoginData;

export const registrationData = {
  firstName: 'Tester',
  lastName: 'Testing',
  address: '1410 Aldis Avenue',
  city: 'Los Angeles',
  state: 'California',
  zipCode: 90001,
  phoneNumber: 123321123,
  ssn: 321123321,
  username: `test${now}`,
  password: '1Password!',
  passwordConfirm: '1Password!',
} satisfies IRegistrationData;
