import { GET_RISTORANTI } from "../actions";

const initialState = {
  ristornati: [],
  isAdmin: false,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RISTORANTI:
      return {
        ...state,
        ristoranti: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
