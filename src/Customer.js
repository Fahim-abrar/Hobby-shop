import React from "react";
import "./customer.css";
import Aboutusimg from "./Images/Aboutusimg.jpg"
import Avatar from '@material-ui/core/Avatar';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


function Customer() {
  return (
    <div className="customer">
      <div className="customer-name">
        <div className="customer-topup">
          <Avatar src={Aboutusimg} style={{ height: "10vh", width: "7vw" }} />
        </div>
        <div className="customer-namestyle">
          <div className="customer-Settings">Settings</div>
          <Link to="/" className="customer-Categories">
            Categories
          </Link>
          <div className="customer-myorders">My Orders </div>
          <div className="customer-wishlist">Wishlist</div>
          <div className="customer-ratings">My ratings & My reviews</div>
          <div className="customer-notification">Notifications</div>
          <div className="customer-settings">Setting</div>
          <div className="customer-logout">Logout</div>
        </div>
      </div>
      <div className="customer-card">
        <div className="customer_content">
          <div className="customer-title">
            <h3>Customer Profile</h3>
          </div>
          <div className="customer-right">
            <div className="customer-body">
              <div className="customer-info">First Name:</div>
              <div className="customer-info">Last Name:</div>
              <div className="customer-info">Email:</div>

              <div className="bton">
                <button>
                  <a>Change Password</a>
                </button>
              </div>
              <div className="customer-password">
                <button>
                  <a>Edit profile</a>
                </button>
              </div>
            </div>
            <div className="customer-avatar">
              <Avatar
                src={Aboutusimg}
                style={{ height: "10vh", width: "7vw" }}
              />
              <button className="customer-btn"> Upload new</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
