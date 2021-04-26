// const GET_POSTS = "GET_POSTS";
// const POST_ERROR = "POST_ERROR";

const initialState = [];

export const getPostsAction = (posts) => ({
  type: "GET_POSTS",
  payload: posts,
});

export const getPosts = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`/api/posts`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const posts = await response.json();

  //   if (response.status !== 200) {
  //     const error = await response.json();
  //     dispatch({ type: "POST_ERROR", error: error.message });
  //     return;
  //   }

  dispatch({ type: "GET_POSTS", payload: posts });
};

export const deletePost = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  dispatch({ type: "DELETE_POST", payload: id });

  /*  if (response.status !== 200) {
    const error = await response.json();
    dispatch({ type: "POST_ERROR", error: error.message });
    return;
  }
 */
};

export const addPost = (post) => async (dispatch) => {

  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ text: post }),
    });

    const res = await response.json();
    console.log("successs", res);
    dispatch({ type: "ADD_POST", payload: res });
  } catch (err) {
    console.log(err);
  }

  /*  if (response.status !== 200) {
    const error = await response.json();
    dispatch({ type: "POST_ERROR", error: error.message });
    return;
  }
 */
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    case "POST_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };

    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};
