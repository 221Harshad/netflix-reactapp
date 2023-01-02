import React, { useState } from "react";
import './SignIn.css'
import {useNavigate} from 'react-router-dom'

function Signin({setUser}) {

    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password) return;
    navigate('/dashboard')
  
  };
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formdiv">
        <h5>Sign In</h5>
        <div className="form-row">
          <input
            type="email"
            className="form-input"
            id="email"
            placeholder="Email"
            value={email}   
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            className="form-input"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-block">
          Sign In
        </button>
        <div>
        <input value="true" type="checkbox"/><label>Remember me</label> 
    
        </div>
       
        <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
      
        </div>
      </form>
    </section>
  );
}

export default Signin;
