import { ADD_MENU_FIELD } from "../actions";
import { DELETE_MENU_FIELD } from "../actions";
import { AGGIUNGI_IMMAGINE } from "../actions";
import { CANCELLA_IMMAGINE } from "../actions";
import { GET_USER_LOGGED } from "../actions";
import {FETCH_DATA_SUCCESS} from "../actions";



const initialState = {
  ristoranti: [],
  isAdmin: false,
  cardImmagini: [],
  clienteLoggato: null,
};



const homeReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case GET_USER_LOGGED:
      return {
        ...state,
        clienteLoggato: action.payload,
      };//fetch/azione che andra a riempire il carosello col contenuto di ritorno della get su ristoranti/nome/tipoCucina
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          ristoranti: action.payload,
        };
    default:
      return state;
  }
};

export default homeReducer;
