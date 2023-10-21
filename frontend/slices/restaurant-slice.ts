import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Restaurant {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: object[];
  long: number;
  lat: number;
}

const initialState: { details: Restaurant } = {
  details: {
    id: "",
    imgUrl: "",
    title: "",
    rating: 0,
    genre: "",
    address: "",
    short_description: "",
    dishes: [],
    long: 0,
    lat: 0,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.details = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
