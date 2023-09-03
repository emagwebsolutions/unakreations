import axios from 'axios';

const client = axios.create({
  baseURL: '/api',
}
);

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = 'Bearer token';

  const onSuccess = (response: any) => response;
  const onError = (error: string) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
