import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Aboutusimg from "./Images/Aboutusimg.jpg";
import "./Myorder.css";
import {useHistory} from 'react-router-dom'
import { BrowserRouter as Router, Link } from "react-router-dom";

function Myorder() {
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  let history = useHistory();
  return (
    <div className="myorder">
      <div className="myorder-name">
        <div className="myorder-topup">
          <Avatar src={`http://localhost:4000/${user.image}`} style={{ height: "10vh", width: "7vw" }} />

          <div className="myorder-nameoftop">{user.firstname}{" "} {user.lastname}</div>
        </div>
        <div className="myorder-namestyle">
        <Link to="/" className="myorder-Categories">
            Categories
          </Link>
          <Link to="/Wishlist" style={{ textDecoration:"none",fontSize:"25px" }} className="myorder-wishlist">Wishlist</Link>
          <Link to="/Rating" style={{ textDecoration:"none",fontSize:"25px" }}  className="myorder-myorders">My ratings & My reviews</Link>
          <Link to="/NotiPage" style={{ textDecoration:"none",fontSize:"25px" }}  className="myorder-notification">Notifications</Link>

          <div onClick={()=>{sessionStorage.removeItem('jwt'); history.push("/") }} className="myorder-logout">Logout</div>
        </div>
      </div>
      <div className="myorder-right">
      <div className="myorder--right-top">My Orders</div>
      <div className="myorder-right-lower">
        <img
          className="Wishlist-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdHGbdmFlhLqoFbADot-7HwhNiFoBm_JHQjvbh4kS9hQwNs2GjXsKFBs73gn3nsPvWRw&usqp=CAU"
        ></img>
        <div className="myorder-product-right"> 
        <div className="myorder-product-btn">
          <div className="myorder-product-space">
            <div className="myorder-info">product 1</div>
            <div className="myorder-Tk">Tk</div>
            <div className="myorder-rating">value</div>
          </div>
          
          </div>
          <div className="myorder-Description">myorder product desciption</div>
          </div> 
      </div>
      </div>

    </div>
  );
}

export default Myorder;
