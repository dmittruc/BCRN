import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TAppDispatch, TRootState } from '../store';
import {
  logoutAsyncAction,
  signInAsyncAction,
  signUpAsyncAction,
} from '../store/actions/authActions';

const useAuth = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const accessToken = useSelector<TRootState, string | undefined>(
    (state: TRootState) => state.auth.accessToken,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.auth.loading,
  );

  const signIn = React.useCallback((email: string, password: string) => {
    dispatch(signInAsyncAction({ email: email, password: password }));
  }, []);

  const signUp = React.useCallback(
    (email: string, name: string, password: string, repeatPassword: string) => {
      dispatch(
        signUpAsyncAction({
          email: email,
          name: name,
          password: password,
          repeatPassword: repeatPassword,
        }),
      );
    },
    [],
  );

  const logout = React.useCallback(() => {
    dispatch(logoutAsyncAction());
  }, []);

  return {
    accessToken,
    loading,
    signIn,
    signUp,
    logout,
  };
};

export default useAuth;
