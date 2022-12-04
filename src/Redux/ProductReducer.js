import { ADD_TO_CARD, REMOVE_TO_CARD } from "./actionTypes";

const initialState = {
  cart: [],
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_TO_CARD:
      return {};
    default:
      return state;
  }
};
