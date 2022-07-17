import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    filter: '',
  },
  //=============================
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
    },
    removeUser: (state, action) => {
      state.items = state.items.filter(user => user.id !== action.payload);
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['items']
};
export const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);
//=======================================================================
export const { addUser, removeUser, addFilter } = userSlice.actions;
