import { UserInitialState } from '@/types/index';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserInitialState = {
  user: null,
  token: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;  
    },
  },
});

export const { currentUser } = userSlice.actions;

export default userSlice.reducer;
