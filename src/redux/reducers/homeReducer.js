import { ADD_MENU_FIELD, DELETE_RESERVATION} from "../actions";
import { DELETE_MENU_FIELD } from "../actions";
import { AGGIUNGI_IMMAGINE } from "../actions";
import { CANCELLA_IMMAGINE } from "../actions";
import { GET_USER_LOGGED } from "../actions";
import {FETCH_DATA_SUCCESS} from "../actions";
import { SET_PROFILE } from "../actions";
import {DELETE_RISTORANTE} from "../actions";

const initialState = {

  ristoranti: [],
  isAdmin: false,
  cardImmagini: [],
  clienteLoggato: null,
  profile: null,
  reservation: []
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
      };

      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          ristoranti: action.payload,
        };

        case SET_PROFILE:
          return {
            ...state,
            profile: action.payload
          };

          case DELETE_RISTORANTE:
            const ristoranteId = action.payload;
            const updatedRistoranti = state.ristoranti.filter(
              (ristorante) => ristorante.id !== ristoranteId    
            );
            return {
              ...state,
              ristoranti: updatedRistoranti,
            };
            case DELETE_RESERVATION:
      return {
        ...state,
        reservation: state.reservation.filter((reservation) => reservation.idPrenotazione !== action.payload),
      };
    default:
      return state;
  }
};

export default homeReducer;
