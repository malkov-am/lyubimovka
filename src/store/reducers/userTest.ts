import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: "John",
};

const userTest = createSlice({
  name: "test",
  initialState,
  reducers: {
    addUser: (state: object, action: PayloadAction<string>) => {
      state = { ...state, user: `${action.payload}` };
    },
  },
});

export const { addUser } = userTest.actions;

export default userTest.reducer;
