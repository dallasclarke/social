const initialState = {};

export const getCurrentProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("/api/profile", {
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await res.json();
    dispatch({
      type: "GET_PROFILE",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editProfile = ({bio, city, state }) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-type": "Application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        bio,
        city,
        state,
            
      }),
    });

    const res = await response.json();
    console.log(res, "successfully edited!!!!!")
    dispatch({
      type: "UPDATE_PROFILE",
      payload: res
    })
  } catch (err) {
    console.log(err);
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      return {
        ...state,
       ...action.payload
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        bio: action.payload.bio,
        city: action.payload.city,
        state: action.payload.state,        
      };

    default:
      return state;
  }
};
