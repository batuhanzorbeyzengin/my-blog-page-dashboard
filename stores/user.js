import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("userData")) || []
    : []
}

const user = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("userData", JSON.stringify(state.userData));
      }
    },
    deleteUser: state => {
      state.userData = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("userData");
      }
    }
  }
})

export const { addUser, deleteUser } = user.actions
export default user.reducer