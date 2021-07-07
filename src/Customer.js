import React from "react";
import "./customer.css";

function Customer() {
  return (
    <div className="customer">
      <div className="customer-name">
        My Orders Wishlist 8 My ratings My reviews Notifications Setting
        ------------------------------ Logout
        <div className="customer-profile">this is profile</div>
      </div>
      <div className="customer-card">
        <div className="customer-image">
          <img src="" alt="" />
        </div>
        <div className="customer_content">
          <div className="customer-title">
            <h3>Customer Profile</h3>
          </div>
          <div className="customer-body">
            <div className="customer-info">First Name:</div>
            <div className="customer-info">Last Name:</div>
            <div className="customer-info">Email:</div>
          </div>
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
      </div>
    </div>
  );
}

export default Customer;
