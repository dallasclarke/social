import React from "react";

function Login() {
  return (
    <div className="login-container">
      <div className="signin">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Login</button>
        
      </div>
    </div>
  );
}

export default Login;