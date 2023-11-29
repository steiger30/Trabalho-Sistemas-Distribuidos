import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/auth.slice";
import productSliceReducer from "./slices/product.slice";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    product: productSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
