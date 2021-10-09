import React from "react";
import Aboutusimg from "./Images/Aboutusimg.jpg";
import Avatar from "@material-ui/core/Avatar";
import { useStateValue } from "./StateProvider/StateProvider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Wishlist.css";
import { useParams } from "react-router-dom";

function Wishlist() {
  return (
    <div>
      <div className="Wishlist">
        <div className="Wishlist-left">
          <div className="Wishlist-name">
            <div className="Wishlist-topup">
              <Avatar
                src={Aboutusimg}
                style={{ height: "10vh", width: "7vw" }}
              />
            </div>
            <div className="Wishlist-nameoftop">User Name</div>

            <div className="Wishlist-namestyle">
              <Link to="/" className="Wishlist-Categories">
                Categories
              </Link>
              <div className="Wishlist-myorders">My Orders </div>
              <div className="Wishlist-ratings">My ratings & My reviews</div>
              <div className="Wishlist-notification">Notifications</div>

              <div className="Wishlist-logout">Logout</div>
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
