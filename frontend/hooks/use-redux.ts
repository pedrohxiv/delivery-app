import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { addToBasket, removeFromBasket } from "../slices/basket-slice";
import { setRestaurant } from "../slices/restaurant-slice";

import type { RootState, AppDispatch } from "../store";

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
  addToBasket,
  removeFromBasket,
  setRestaurant,
};
