import axios from "axios";

const initialState = {
  profile: {},
};

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
    console.log("profile from action ===>", data);
    dispatch({
      type: "GET_PROFILE",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
