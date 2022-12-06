import React, {useState} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
          const loggedInUser = await signInWithEmailAndPassword(auth,email,password);
          if(loggedInUser){
            navigate("/");
          }

    } catch (error) {
      setError(true);      
    }

  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Enauro Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          {error && <span>Something went wrong ....</span>}
        </form>
        <p>Don't you have an account? <Link to="/register"> Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
