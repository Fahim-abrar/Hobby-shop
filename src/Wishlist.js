import React from "react";
import Aboutusimg from "./Images/Aboutusimg.jpg";
import Avatar from "@material-ui/core/Avatar";
import { useStateValue } from "./StateProvider/StateProvider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Wishlist.css";
import {useHistory} from 'react-router-dom'
import { useParams } from "react-router-dom";

function Wishlist() {
  const user = JSON.parse(sessionStorage.getItem('jwt'));
  let history = useHistory();
  return (
    <div>
      <div className="Wishlist">
        <div className="Wishlist-left">
          <div className="Wishlist-name">
            <div className="Wishlist-topup">
              <Avatar
                src={`http://localhost:4000/${user.image}`}
                style={{ height: "10vh", width: "7vw" }}
              />
            </div>
            <div className="Wishlist-nameoftop">{user.firstname}{" "} {user.lastname}</div>

            <div className="Wishlist-namestyle">
            <Link to="/" className="Editprofile-Categories">
            Categories
          </Link>
          <Link to="/Myorder" style={{ textDecoration:"none",fontSize:"25px" }} className="Editprofile-myorders">My Orders </Link>
          <Link to="/Rating" style={{ textDecoration:"none",fontSize:"25px" }}  className="Editprofile-ratings">My ratings & My reviews</Link>
          <Link to="/NotiPage" style={{ textDecoration:"none",fontSize:"25px" }}  className="Editprofile-notification">Notifications</Link>

          <div onClick={()=>{sessionStorage.removeItem('jwt'); history.push("/") }} className="Editprofile-logout">Logout</div>
            </div>
          </div>
        </div>
        <div className="Wishlist-right">
          <div className="Wishlist-result">My Wishlist </div>
          <div className="Wishlist-noitems">2 Iteams</div>

          <div className="Wishlist-products">
            <img
              className="Wishlist-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdHGbdmFlhLqoFbADot-7HwhNiFoBm_JHQjvbh4kS9hQwNs2GjXsKFBs73gn3nsPvWRw&usqp=CAU"
            ></img>
            <div className="Wishlist-product-right">
              <div className="Wishlist-product-btn">
                <div className="Wishlist-product-space">
                  <div className="Wishlist-info">Wishlist product 1</div>
                  <div className="Wishlist-Tk">Tk</div>
                  <div className="Wishlist-Rating">Rating</div>
                </div>
                <div className="Wishlist-btn">
                  <Link className="Wishlist-btn-1">
                    <button className="Wishlist-btn-btn">
                      <a className="Wishlist-btn-btn">Remove from wishlist</a>
                    </button>
                  </Link>
                  <Link className="Wishlist-btn-1">
                    <button className="Wishlist-btn-btn">
                      <a className="Wishlist-btn-btn">Add to Cart</a>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="Wishlist-Description">
                Wishlist product desciption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
