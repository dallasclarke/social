import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import { Container } from "react-bootstrap";
import "./styles/App.scss";

import Login from "./components/login/Login";
import Feed from "./components/feed/Feed";
import UserProfile from "./components/profile/UserProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid>
          <Route exact path="/" component={Login} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/profile" component={UserProfile} />
          {/* <Login /> */}
          {/* <Feed /> */}
          {/* <UserProfile /> */}
        </Container>
      </div>
    </Router>
  );
}

export default App;
