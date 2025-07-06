import { combineReducers } from '@reduxjs/toolkit';
import MMKVStorage from 'react-native-mmkv-storage';
import { persistReducer } from 'redux-persist';
import authReducer from './authReducer';

const MMKV = new MMKVStorage.Loader().initialize();

const authPersistConfig = {
  key: 'auth',
  storage: {
    setItem: (key: string, value: string) => MMKV.setStringAsync(key, value),
    getItem: (key: string) => MMKV.getStringAsync(key),
    removeItem: (key: string) => MMKV.removeItem(key),
  },
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
