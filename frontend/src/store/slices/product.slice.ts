import { PayloadAction, createSlice } from "@reduxjs/toolkit";



export interface LoginActionPayload {
  name: string;
  price: number;
  description?: string;
  id: string;
}
export const initialState: LoginActionPayload = {
  name: '',
  price: 0,
  description: '',
  id: '',
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    product: (state, action: PayloadAction<LoginActionPayload>) => {
      state.name = action.payload.name;
      state.price = action.payload.price;
      state.description = action.payload.description;
      state.id = action.payload.id;
    },
  },
});

export const { product } = productSlice.actions;

export default productSlice.reducer;
