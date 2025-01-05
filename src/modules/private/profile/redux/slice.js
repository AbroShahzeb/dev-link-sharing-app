import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.picture = action.picture;
    },
    setPicture: (state, action) => {
      state.picture = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    clearUser: (state) => {
      state.name = "";
      state.email = "";
      state.picture = "";
    },
  },
});

export const {
  setUser,
  clearUser,
  setPicture,
  setFirstName,
  setLastName,
  setEmail,
} = userSlice.actions;

export default userSlice.reducer;
