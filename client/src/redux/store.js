import { combineReducers } from '@reduxjs/toolkit';
import { createStore } from '@reduxjs/toolkit';
import { applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import userSlice from './userSlice';
import projectSlice from './projectSlice';

const reducers = combineReducers({
  user: userSlice.reducer,
  project: projectSlice.reducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
