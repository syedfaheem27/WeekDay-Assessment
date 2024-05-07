import dataReducer from "../slices/dataSlice";
import filterReducer from "../slices/filterSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    data: dataReducer,
    filters: filterReducer,
  },
});

export default store;
