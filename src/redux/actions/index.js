export const GET_RISTORANTI = "GET_RISTORANTI";
export const SET_ADMIN = "SET_ADMIN";
export const ADD_MENU_FIELD = "ADD_MENU_FIELD";
export const DELETE_MENU_FIELD = "DELETE_MENU_FIELD";
export const SET_CARD_IMMAGINI = "SET_CARD_IMMAGINI";
export const AGGIUNGI_IMMAGINE = "AGGIUNGI_IMMAGINE";
export const CANCELLA_IMMAGINE = "CANCELLA_IMMAGINE";
export const GET_USER_LOGGED = "GET_USER_LOGGED";



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


/* export const getRistorantiAction = () => {
  const url = "http://localhost:8080/ristoranti/all";
  return async dispatch => {
    try {
      let resp = await fetch(url);
      if (resp.ok) {
        let data = await resp.json();

        dispatch({ type: GET_RISTORANTI, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
*/


export const searchRestaurants = (city, restaurantName) => {
  return async dispatch => {
    try {
      let url = 'http://localhost:8080/ristoranti?';
      
      if (city) {
        url += `luogo=${city}&`;
      }
      
      if (restaurantName) {
        url += `nomeRistorante=${restaurantName}&`;
      }
      
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_RISTORANTI, payload: data });
      } else {
        throw new Error('Failed to fetch restaurants');
      }
    } catch (error) {
      console.log(error);
    }
  };
};








