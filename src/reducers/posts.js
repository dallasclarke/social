const initialState = {};

export const getPostsAction = (posts) => ({
  type: "GET_POSTS",
  payload: posts,
});

export const getPosts = () => async (dispatch) => {
  dispatch({ type: "LOAD_POSTS" });
  const token = localStorage.getItem("token");
  const response = await fetch(`/api/posts`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const posts = await response.json();

  console.log("posts", posts);
  // console.log(posts)
  //   if (response.status !== 200) {
  //     const error = await response.json();
  //     dispatch({ type: "POST_ERROR", error: error.message });
  //     return;
  //   }

  dispatch({ type: "GET_POSTS", payload: posts });
};

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: "LOAD_POSTS" });
  const token = localStorage.getItem("token");
  const response = await fetch(`/api/posts/${id}`, {
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  const post = await response.json();

  console.log("post", post);
  // console.log(posts)
  //   if (response.status !== 200) {
  //     const error = await response.json();
  //     dispatch({ type: "POST_ERROR", error: error.message });
  //     return;
  //   }

  dispatch({ type: "GET_POST", payload: post });
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

export const addPost = (post, image, extension) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ text: post, image, extension }),
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
        data: action.payload,
        loading: false,
      };

    case "GET_POST":
      return {
        ...state,
        post: action.payload,
        loading: false,
      };

    case "LOAD_POSTS":
      return {
        ...state,
        loading: true,
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
        data: state.data.filter((post) => post._id !== action.payload),
      };

    case "ADD_POST":
      return {
        ...state,
        data: [action.payload, ...state.data],
      };

    default:
      return state;
  }
};
