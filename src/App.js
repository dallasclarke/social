import React from "react";

import "./styles/App.scss";
import Login from "./components/login/Login";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className="App">
        {/* <Login /> */}
        <Feed />
    </div>
  );
}

export default App;
