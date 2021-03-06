import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./styles/App.scss";

import Login from "./components/login/Login";
import Feed from "./components/feed/Feed";
import UserProfile from "./components/profile/UserProfile";
import useCheckAuth from "./hooks/use-check-auth";
import UserPostInfo from "./components/feed/UserPostInfo";

function ProtectedRoute(props) {
  const { user, isAuthenticating } = useCheckAuth();

  if (user === null) {
    if (isAuthenticating) {
      return null;
    }

    return <Redirect to="/login" />;
  }

  const ProtectedComponent = props.component;

  return <ProtectedComponent {...props} />;
}

function App() {
  return (
    <Router>
      {/* <AppNav /> */}
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/feed" component={Feed} />
        <ProtectedRoute path="/profile" component={UserProfile} />
        <Route path="/:id" component={UserPostInfo} />
        <ProtectedRoute path="/" component={Feed} />
      </Switch>
    </Router>
  );
}

export default App;
