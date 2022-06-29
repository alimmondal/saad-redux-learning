import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import themeReducer from './themeSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;