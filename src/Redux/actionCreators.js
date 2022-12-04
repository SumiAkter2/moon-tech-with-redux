import { ADD_TO_CARD } from "./actionTypes";

export const actionCreators = ({ product }) => {
  return {
    type: ADD_TO_CARD,
    payload: { product },
  };
};
