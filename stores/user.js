import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: []
}

const user = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData = action.payload
    },
    deleteUser : state => {
      state.userData = false
    }
  }
})

export const { addUser, deleteUser } = user.actions
export default user.reducer