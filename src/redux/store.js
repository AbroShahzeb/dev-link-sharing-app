import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "../modules/private/links/redux/slice";
import userReducer from "../modules/private/profile/redux/slice";

const store = configureStore({
  reducer: {
    links: linksReducer,
    user: userReducer,
  },
});

export default store;
