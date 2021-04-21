import { useEffect } from "react";
import { authVerifyUser } from "../reducers/auth";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const { user, isAuthenticating } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user === null && isAuthenticating) {
      const token = localStorage.getItem("token");

      if (!token) {
        dispatch({ type: "AUTH_NO_TOKEN" });
      } else {
        dispatch(authVerifyUser(token));
      }
    }
  }, [user, isAuthenticating]);

  return { user, isAuthenticating };
};
