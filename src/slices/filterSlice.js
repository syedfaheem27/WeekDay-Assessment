import { createSlice } from "@reduxjs/toolkit";
import { emitCorrectKey } from "../helpers/emitCorrectFilterKey";

const initialState = {
  filters: {
    jobRole: [],
    minExp: 0,
    location: [],
    minJdSalary: 0,
    companyName: "",
  },
};

const filterSlice = createSlice({
  name: "filterReducer",
  initialState,
  reducers: {
    addFilter(state, action) {
      const { key, val } = action.payload;

      const identifier = emitCorrectKey(key);

      switch (identifier) {
        case "jobRole":
          state.filters.jobRole.push(val);
          break;
        case "minExp":
          state.filters.minExp = val;
          break;
        case "location":
          state.filters.location.push(val);
          break;
        case "minJdSalary":
          state.filters.minJdSalary = val;
          break;
        case "companyName":
          state.filters.companyName = val;
      }
    },
    removeFilter(state, action) {
      const { key, val } = action.payload;
      const identifier = emitCorrectKey(key);

      switch (identifier) {
        case "jobRole":
          state.filters.jobRole = state.filters.jobRole.filter(
            (f) => f !== val
          );
          break;

        case "minExp":
          state.filters.minExp = 0;
          break;

        case "location":
          state.filters.location = state.filters.location.filter(
            (f) => f !== val
          );
          break;

        case "minJdSalary":
          state.filters.minJdSalary = 0;
          break;
      }
    },

    resetAllFilters(state) {
      state.filters = {
        ...initialState.filters,
      };
    },
  },
});

export const { addFilter, removeFilter, resetAllFilters } = filterSlice.actions;

export default filterSlice.reducer;
