import axios from 'axios';
import { APIEndpoints } from '../globals';

export const loginUser = (identifier, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(APIEndpoints.userLogin, `user=${JSON.stringify({ identifier, password })}`, {
        headers: {
          // 'Access-Control-Allow-Credentials': true,
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'GET',
          // 'Access-Control-Allow-Headers': 'application/json'
        },
        proxyHeaders: false,
        credentials: false,
        responseType: 'json'
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error.response);
      });
  });
};

export const registerUser = userObject => {
  return userObject;
};
