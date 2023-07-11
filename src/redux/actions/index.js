export const SET_ADMIN = "SET_ADMIN";
export const ADD_MENU_FIELD = "ADD_MENU_FIELD";
export const DELETE_MENU_FIELD = "DELETE_MENU_FIELD";
export const SET_CARD_IMMAGINI = "SET_CARD_IMMAGINI";
export const AGGIUNGI_IMMAGINE = "AGGIUNGI_IMMAGINE";
export const CANCELLA_IMMAGINE = "CANCELLA_IMMAGINE";
export const GET_USER_LOGGED = "GET_USER_LOGGED";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const SET_PROFILE = "SET_PROFILE";
export const DELETE_RISTORANTE = "DELETE_RISTORANTE";


export const setAdmin = isAdmin => {
  return {
    type: "SET_ADMIN",
    payload: isAdmin,
  };
};

export const signUpUser = userData => {
  return {
    type: "SIGN_UP_USER",
    payload: userData,
  };
};

export const setProfile = profile => {
  return {
    type: SET_PROFILE,
    payload: profile
  };
};

export const createRestaurant = restaurantData => {
  return {
    type: "CREATE_RESTAURANT",
    payload: restaurantData,
  };
};

export const addMenuField = () => ({
  type: ADD_MENU_FIELD,
});

export const deleteMenuField = index => ({
  type: DELETE_MENU_FIELD,
  payload: index,
});

export const aggiungiImmagine = () => ({
  type: "AGGIUNGI_IMMAGINE",
});

export const cancellaImmagine = index => ({
  type: "CANCELLA_IMMAGINE",
  payload: index,
});

//action per riempire i caroselli dei ristoranti
export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};


export const setUtenteLoggato = (data) => ({
  type: GET_USER_LOGGED,
  payload: data,
}
)
export const deleteRistorante = (ristoranteId) => {
  return {
    type: DELETE_RISTORANTE,
    payload: ristoranteId,
  };
};




export const getUserLoggedAction = () => {
  const token = localStorage.getItem("token");
  const url = "http://localhost:8080/cliente/me";
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        
        dispatch({ type: GET_USER_LOGGED, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};




// fetch prenotazione ristorante


// const submitReservation = async (clientId, restaurantId, date, time) => {
//   const token = localStorage.getItem("token");
//   const url = await fetch('http://localhost:8080/cliente/me', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       clientId,
//       restaurantId,
//       date,
//       time
//     })
//   });
//   const data = await response.json();
//   // gestisci la risposta del server
// }



