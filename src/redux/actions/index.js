export const GET_RISTORANTI = "GET_RISTORANTI";
export const SET_ADMIN = "SET_ADMIN";

export const getRistorantiAction = () => {
  const url = "http://localhost:3001/ristoranti/all";
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
