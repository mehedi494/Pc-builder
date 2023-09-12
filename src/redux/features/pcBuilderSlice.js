import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  componets: [],
};

const pcBuilderSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addComponets: (state, action) => {
      state.componets.push(action.payload);
    },
    removeComponets: (state, action) => {
      state.componets = state.componets.filter(
        (comp) => comp.category !== action.payload
      );
    },
  },
});

export const { addComponets, removeComponets } = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;
