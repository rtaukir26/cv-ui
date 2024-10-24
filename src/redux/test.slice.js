import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test slice",
  initialState: false,
  reducers: {
    setTestRedux: (state, { payload }) => {
      return payload;
    },
  },
});
export const { setTestRedux } = testSlice.actions;
export default testSlice;
