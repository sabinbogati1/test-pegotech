import axios from 'axios';

export const getAllCountries = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(
        'https://restcountries.eu/rest/v2/region/asia'
      );

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
