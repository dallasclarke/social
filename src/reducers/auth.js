const initialState = {};

export const authLoginUser = (email, password) => async (dispatch) => {
  const response = await fetch(`/api/users/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.status !== 200) {
    const error = await response.json();
    dispatch({ type: "AUTH_ERROR", error: error.message });
    return;
  }

  const { jwtToken, email: userEmail } = await response.json();

  localStorage.setItem("token", jwtToken);

  dispatch({ type: "AUTH_UPDATE_USER", user: { email: userEmail } });
};

export const authRegisterUser = (regData) => async (dispatch) => {
  const response = await fetch(`/api/users/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(regData),
  });

  if (response.status !== 200) {
    const error = await response.json();
    dispatch({ type: "AUTH_ERROR", error: error.message });
    return;
  }

  const  message = await response.json();


  console.log('successfully registered(!!', message)
 window.location = '/'
  //dispatch({ type: "AUTH_UPDATE_USER", user: { email: userEmail } });
};


export const authLogoutUser = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "AUTH_UPDATE_USER", user: null });
};

export const authVerifyUser = (token) => async (dispatch) => {
  const response = await fetch(
    `/api/users/verify?${new URLSearchParams({
      token,
    })}`
  );

  const user = await response.json();

  dispatch({ type: "AUTH_UPDATE_USER", user });
};

export default (state = initialState, action) => {
  if (action.type === "AUTH_NO_TOKEN") {
    return {
      ...state,
      isAuthenticating: false,
    };
  }

  if (action.type === "AUTH_UPDATE_USER") {
    return {
      ...state,
      isAuthenticating: false,
      user: action.user,
      error: null,
    };
  }

  if (action.type === "AUTH_ERROR") {
    return {
      ...state,
      error: action.error,
    };
  }

  return state;
};
