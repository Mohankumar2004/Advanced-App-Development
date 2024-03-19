import React, { useState } from 'react';
import './signup.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    navigate("/");
  };

  return (
    <div className="signup-form">
      <div className="signup-page">
        <div className="signup-background"></div>
        <form onSubmit={handleSubmit}>
          <div className='textsignup'>
            Sign Up
          </div>
          <div>
            <label>Name:</label>
            <div className="textbox">
              <input type="text" value={name} onChange={handleNameChange} required/>
            </div>
          </div>
          <div>
            <label>Email:</label>
            <div className="textbox">
              <input type="email" value={email} onChange={handleEmailChange} required/>
            </div>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required/>
          </div>
          <button type="submit">Sign Up</button>
          <li className='haveaccount'>
            Already have an account? <Link to="/">Login here</Link>
          </li>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
