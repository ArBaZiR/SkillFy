//
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: false,
    user: {},
  },
  reducers: {
    setUser(state, action) {
      state.status = true;
      state.user = action.payload;
    },
    removeUser(state) {
      state.status = false;
      state.user = {};
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
