import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    role: [],
    photoURL: "",
    _id: "",
  },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
  },
  extraReducers: {},
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
