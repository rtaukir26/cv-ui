import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import testSlice from "./test.slice";

const store = configureStore({
  reducer: {
    testSilce: testSlice.reducer,
  },
  middlewareL: [logger],
});

export default store;
