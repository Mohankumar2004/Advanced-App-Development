import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/home");
  };

  return (
    <div className="login-form">
      <div className="login-page">
        <div className="login-backgroun"></div>
        <form onSubmit={handleSubmit}>
          <div className="textlogin">Login</div>
          <div>
            <label>Email:</label>
            <div className="textbox">
              <input
                type="email"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="remember">
            
          </div>

          <button type="submit">Login</button>
          <li className="noaccount">New Uses? <Link to="/signup">Register here</Link></li>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;