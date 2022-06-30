import { SET_TYPE, SET_SEARCH } from "./controls-actions";

const initialState = {
  search: "",
  type: "",
  sort: "relevance",
};

export const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_TYPE:
      return {
        ...state,
        type: payload,
      };
    default:
      return state;
  }
};
