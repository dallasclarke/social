import React from "react";

import RegisterCard from "./RegisterCard";

function Login() {
  return (
    <div className="login-container">
      <div className="signin">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
      </div>
        <RegisterCard />
    </div>
  );
}

export default Login;