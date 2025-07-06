import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { TRootState } from '..';
import { logoutApi, signInApi, signUpApi } from '../../api/authApi';
import {
  ISetAccessTokenAction,
  ISetLoadingAction,
  ISetRefreshTokenAction,
  ISignInAsyncAction,
  ISignUpAsyncAction,
} from '../../interfaces/actions/authActions';
import { handleErrorResponse } from '../../utils/errorHandlers';

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  'auth/setAccessTokenAction',
);

export const setRefreshTokenAction = createAction<ISetRefreshTokenAction>(
  'auth/setRefreshTokenAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'auth/setLoadingAction',
);

export const signInAsyncAction = createAsyncThunk<void, ISignInAsyncAction>(
  'auth/signInAsyncAction',
  async ({ email, password, onSuccess }: ISignInAsyncAction, { dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await signInApi(email.toLowerCase(), password);
      if (res.tokens) {
        if (res.tokens.accessToken) {
          dispatch(
            setAccessTokenAction({ accessToken: res.tokens.accessToken }),
          );
        }
        if (res.tokens.refreshToken) {
          dispatch(
            setRefreshTokenAction({ refreshToken: res.tokens.refreshToken }),
          );
        }
      }
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('authActions::signInAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);

export const signUpAsyncAction = createAsyncThunk<void, ISignUpAsyncAction>(
  'auth/signUpAsyncAction',
  async (
    { email, name, password, repeatPassword, onSuccess }: ISignUpAsyncAction,
    { dispatch },
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      if (password !== repeatPassword) {
        Alert.alert('Passwords do not match');
        return;
      }
      const res = await signUpApi(email.toLowerCase(), name, password);
      if (res.tokens) {
        if (res.tokens.accessToken) {
          dispatch(
            setAccessTokenAction({ accessToken: res.tokens.accessToken }),
          );
        }
        if (res.tokens.refreshToken) {
          dispatch(
            setRefreshTokenAction({ refreshToken: res.tokens.refreshToken }),
          );
        }
      }
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('authActions::signUpAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  },
);

export const logoutAsyncAction = createAsyncThunk<
  void,
  void,
  { state: TRootState }
>('auth/logoutAsyncAction', async (_, { getState, dispatch }) => {
  try {
    const refreshToken = getState().auth.refreshToken;
    if (refreshToken) {
      const res = await logoutApi(refreshToken);
      if (res.isDone) {
        dispatch(setRefreshTokenAction({ refreshToken: undefined }));
        dispatch(setAccessTokenAction({ accessToken: undefined }));
      }
    }
  } catch (e: any) {
    console.log('authActions::logoutAsyncAction error:', e);
  }
});
