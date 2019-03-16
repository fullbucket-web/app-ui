// @flow
import Cookies from 'universal-cookie';
import * as types from '../constants/actionTypes';

type UserLoginPayload = {
  jwt: string,
  username: string,
  id: string
};

type UserRegistrationPayload = {};

export const userLogin = (payload: UserLoginPayload) => {
  const cookies = new Cookies();
  cookies.set('user-token', payload.jwt, { path: '/' });
  return { type: types.USER_LOGIN, payload };
};

export const userRegistration = (payload: UserRegistrationPayload) => {
  return { type: types.USER_REGISTRATION, payload };
};
