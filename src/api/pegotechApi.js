import axios from 'axios';

export const login = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(
        'https://api.framework.pegotec.pro/api/auth/login',
        data
      );

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
