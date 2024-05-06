import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../helpers/fetchData";

const initialState = {
  data: [],
  isLoading: false,
  page: 1,
  maxCount: 0,
};

const dataSlice = createSlice({
  name: "dataReducer",
  initialState,
  reducers: {
    loadingData(state) {
      state.isLoading = true;
    },
    addData(state, action) {
      state.data = [...state.data, ...action.payload.data];
      state.isLoading = false;
    },
    increasePageNum(state) {
      state.page = state.page + 1;
    },
    addMaxCount(state, action) {
      if (state.maxCount !== 0) return;

      state.maxCount = action.payload;
    },
  },
});

export const { loadingData, addData, increasePageNum, addMaxCount } =
  dataSlice.actions;

//Defining a thunk - need to perform side effects which can't be performed in a reducer
//as they should be pure functions

export function loadMoreData(pageNum = 1) {
  return async function (dispatch) {
    dispatch(loadingData());

    const { jdList, totalCount } = await fetchData(pageNum);
    console.log(jdList, totalCount);
    console.log(jdList, totalCount);
    dispatch(
      addData({
        data: jdList,
      })
    );

    dispatch(addMaxCount(totalCount));
  };
}

export default dataSlice.reducer;
