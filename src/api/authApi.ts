import axiosInstance from './axios';

export const signInApi = async (email: string, password: string) => {
  const res = await axiosInstance.post('/users/login', {
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
  const res = await axiosInstance.post('/users/registration', {
    email,
    name,
    password,
  });
  return res.data;
};

export const logoutApi = async (refreshToken: string) => {
  const res = await axiosInstance.post('/users/logout', {
    refreshToken,
  });

  return res.data;
};
