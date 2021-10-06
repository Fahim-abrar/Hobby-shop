import React from 'react'
import "./NotiPage.css"
import Avatar from '@material-ui/core/Avatar';
import Aboutusimg from "./Images/Aboutusimg.jpg"
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function NotiPage() {
    return (
      <div className="notipage">
        <div className="noti-name">
          <div className="noti-topup">
            <Avatar src={Aboutusimg} style={{ height: "10vh", width: "7vw" }} />
          </div>
          <div className="customer-nameoftop">Customer Name</div>
          <div className="noti-namestyle">
            <Link to="/" className="noti-Categories">
              Categories
            </Link>
            <div className="noti-myorders">My Orders </div>
            <div className="noti-wishlist">Wishlist</div>
            <div className="noti-ratings">My ratings & My reviews</div>
            <div className="noti-notification">Notifications</div>
            <div className="noti-logout">Logout</div>
          </div>
        </div>
        <div className="noti-right">
            <div className="noti-header">Notifications</div>
            <div className="noti-body">* Limited time offer on toys! : Click to vieew offer</div>
            <div className="noti-body">* Admin has added a new catgory: Toys</div>
            <div className="noti-body">* Order was placed successfully.</div> <img  className="noti-image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yucca-cane-plant-in-a-pot-on-a-white-background-royalty-free-image-1580856558.jpg?crop=0.91771xw:1xh;center,top&resize=480:*"></img> 
            <div className="noti-body1">* You have items in your cart: You forgot two items in your cart Click to view items</div>
        </div>
      </div>
    );
}

export default NotiPage
