import React,{useState} from 'react'
import "./Register.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

function Register() {
    const [FirstName,setFirstName]= useState("");
    const [LastName,setLastName]= useState("");
    const [Email,setEmail]= useState("");
    const [Password,setPassword]= useState("");
    const [ReptypePassword,setRetypePassword]= useState("");
    const submitform=()=>{
       
    }
    return (
      <div className="Register">
        <div className="Register-form">
          <div className="Register-header"> Hobby Shop
          Register</div>
          <div className="Register-InputContainer">
            <div className="Register-label">First Name: </div>
            <input type="name" className="Register-input"></input>
          </div>
          <div className="Register-InputContainer">
            <div className="Register-label">Last Name: </div>
            <input type="name" className="Register-input"></input>
          </div>
          <div className="Register-InputContainer">
            <div className="Register-label">Email: </div>
            <input type="email" className="Register-input"></input>
          </div>
          <div className="Register-InputContainer">
            <div className="Register-label">Password: </div>
            <input type="password" className="Register-input"></input>
          </div>
          <div className="Register-InputContainer">
            <div className="Register-label">Retype Password: </div>
            <input type="password" className="Register-input"></input>
          </div>
          <div onClick={submitform} className='Register-btn'>
              Register
              </div>
              <Link to="/Signin"className='Register-redirect'>
              Go to Sign In
              </Link>
        </div>
      </div>
    );
}

export default Register
