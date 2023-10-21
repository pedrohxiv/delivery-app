import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "./slices/basket-slice";
import restaurantReducer from "./slices/restaurant-slice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
