import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reducers from './reducers';
export const store = configureStore({ reducer: combineReducers(reducers) });
