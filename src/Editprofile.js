import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Aboutusimg from "./Images/Aboutusimg.jpg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Editprofile.css";

function Editprofile() {
  return (
    <div className="Editprofile">
      <div className="Editprofile-name">
        <div className="Editprofile-topup">
          <Avatar src={Aboutusimg} style={{ height: "10vh", width: "7vw" }} />
        </div>
        <div className="Editprofile-nameoftop">User Name</div>

        <div className="Editprofile-namestyle">
          <Link to="/" className="Editprofile-Categories">
            Categories
          </Link>
          <div className="Editprofile-myorders">My Orders </div>
          <div className="Editprofile-wishlist">Wishlist</div>
          <div className="Editprofile-ratings">My ratings & My reviews</div>
          <div className="Editprofile-notification">Notifications</div>

          <div className="Editprofile-logout">Logout</div>
        </div>
      </div>
      <div className="Editprofile-right">
        <div className="Editprofile-topright">
          <div className="Editprofile-topup2">
            <Avatar
              src={Aboutusimg}
              style={{ height: "20vh", width: "14vw", marginTop: "5vh" }}
            />
          </div>
          <div className="Editprofile-btn">
            <button>
              <a>Upload New</a>
            </button>
          </div>
        </div>
        <div className="Editprofile-right-editprofile">Edit Profile</div>
        <div className="Editprofile-right-middle">
          <div className="Editprofile-right-textarea">
            <div className="Editprofile-Info">First name : </div>
            <input placeholder="Enter your first name" className="Editprofile-current" type="" size="18" />
          </div>
          <div className="Editprofile-right-textarea">
            <div className="Editprofile-Info">Last name : </div>
            <input placeholder="Enter your last name" className="Editprofile-current" type=""  size="18" />
          </div>
          <div className="Editprofile-right-textarea">
            <div className="Editprofile-Info">Email : </div>
            <input placeholder="Enter your email" className="Editprofile-current" type=""  size="18" />
          </div>
          <div className="Editprofile-right-textarea">
            <div className="Editprofile-Info">Current Password : </div>
            <input placeholder="Enter your current Password " className="Editprofile-current" type="password" maxlength="10" size="18" />
          </div>
          <div className="Editprofile-right-textarea">
            <div className="Editprofile-Info">New Password: </div>
            <input placeholder="Enter your new Password" className="Editprofile-current" type="password" maxlength="10" size="18" />
          </div>
          <div className="Editprofile-right-textarea">
            <div className="Editprofile-Info">Confirm Password: </div>
            <input placeholder=" confirm your new Password" className="Editprofile-current" type="password" maxlength="10" size="18" />
          </div>
          <div className="Editprofile-right-lower">
          <div className="Editprofile-btn-1">
            <button>
              <a>Save</a>
            </button>
          </div>
          <div className="Editprofile-btn-2">
            <button>
              <a>Cancel</a>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editprofile;
