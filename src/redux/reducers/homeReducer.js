import { GET_RISTORANTI } from "../actions";
import { ADD_MENU_FIELD } from "../actions";
import { DELETE_MENU_FIELD } from "../actions";
import { AGGIUNGI_IMMAGINE } from "../actions";
import { CANCELLA_IMMAGINE } from "../actions";
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
    case ADD_MENU_FIELD:
      return [...state, { nome: "", descrizione: "" }];
    case DELETE_MENU_FIELD:
      return state.filter((_, index) => index !== action.payload);
    case AGGIUNGI_IMMAGINE:
      if (state.cardImmagini.length < 3) {
        return {
          ...state,
          cardImmagini: [...state.cardImmagini, ""],
        };
      }
      return state;

    case CANCELLA_IMMAGINE:
      return {
        ...state,
        cardImmagini: state.cardImmagini.filter((_, index) => index !== action.payload),
      };

    default:
      return state;
  }
};

export default homeReducer;
