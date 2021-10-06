import React,{useState} from 'react'
import "./Signin.css"
import HomeIcon from '@material-ui/icons/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Signin() {
        const [Email,setEmail]= useState("");
        const [Password,setPassword]= useState("");
        const submitform=()=>{
           
        }
    return (
      <div className="Signin">
      <div className="Signin-form">
          <Link to="/Aboutus" className="Signin-homeicon">
            <HomeIcon/>
          </Link>
          <div className="Signin-Header">Hobby Shop Sign In</div>
          <div className="Signin-InputContainer"> 
            <div className="Signin-label">Email: </div>
            <input type="email" className="Signin-input"></input>
          </div>
          <div className="Signin-InputContainer">
            <div className="Signin-label">Password: </div>
            <input type="password" className="Signin-input"></input>
          </div>
          <div onClick={submitform} className='Signin-btn'>
              Signin
              </div>
              <Link to="/Register"className='Signin-redirect'>
              Go to Register
              </Link>
          </div>
          </div>
    );
}

export default Signin
