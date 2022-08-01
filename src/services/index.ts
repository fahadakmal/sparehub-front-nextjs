import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  transformResponse: [
    function (data: any) {
      if (typeof data === 'string' && data !== '') {
        try {
          data = JSON.parse(data, (key, value) => {
            return value;
          });
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
      }
      return data;
    },
  ],
});

export default api;

const requestConfig = (authToken: any) => {
  return authToken ? { headers: { Authorization: `Bearer ${authToken}` } } : {};
};

export const apiGet = async (path: any, authToken: any) => {
  try {
    return await api.get(path, requestConfig(authToken));
  } catch (e: any) {
    throw e?.response?.data || e;
  }
};

export const apiPost = async (path: any, data: any, authToken: any) => {
  try {
    return await api.post(path, data, requestConfig(authToken));
  } catch (e: any) {
    throw e?.response?.data || e;
  }
};

export const apiPut = async (path: any, data: any, authToken: any) => {
  try {
    if (!data.id) {
      return await api.put(`${path}`, data, requestConfig(authToken));
    } else {
      return await api.put(`${path}/${data.id}`, data, requestConfig(authToken));
    }
  } catch (e: any) {
    throw e?.response?.data || e;
  }
};

export const apiDelete = async (path: any, data: any, authToken: any) => {
  try {
    return await api.delete(`${path}/${data.id}`, requestConfig(authToken));
  } catch (e: any) {
    throw e?.response?.data || e;
  }
};

export const resourceUrl = (path: any) => {
  return `http://localhost:3000/api//${path}`;
};
