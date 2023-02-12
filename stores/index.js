import { configureStore } from "@reduxjs/toolkit";

import User from "./user";

const store = configureStore({
  reducer: {
    User
  }
})

export default store;