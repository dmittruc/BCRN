import axiosInstance from './axios';

export const signInApi = async (email: string, password: string) => {
  const res = await axiosInstance.post('/auth/login', {
    email,
    password,
  });
  return res.data;
};

export const signUpApi = async (
  email: string,
  name: string,
  password: string,
) => {
  const res = await axiosInstance.post('/auth/register', {
    email,
    name,
    password,
  });
  return res.data;
};

export const logoutApi = async (refreshToken: string) => {
  const res = await axiosInstance.post('/auth/logout', {
    refreshToken,
  });
  return res.data;
};
