import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productsApi";
import pcbuilderReducer from "./features/pcBuilderSlice";
const store = configureStore({
  reducer: {
    pcbuilder: pcbuilderReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
