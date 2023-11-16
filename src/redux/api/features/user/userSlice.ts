import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    storeUser: (state, action: PayloadAction<AnyAction>) => {
      console.log(action);
    },
  },
});

export const { storeUser } = userSlice.actions;

export default userSlice.reducer;
