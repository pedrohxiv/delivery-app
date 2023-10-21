import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Basket {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const initialState: { items: Basket[] } = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Basket>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
