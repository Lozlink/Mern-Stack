import { createSlice } from "@reduxjs/toolkit";

//Set initial state and check to see if there's anything in userInfo. If so, parse it otherwise set it to null
const initialState = {
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // save the credentials into localStorage
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    // clear credentials from localStorage
    clearCredentials: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');

    } 
  }
});

export const {setCredentials, clearCredentials } = authSlice.actions

export default authSlice.reducer