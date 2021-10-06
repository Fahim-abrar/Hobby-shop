import React from "react";
import "./Basket.css";
import Aboutusimg from "./Images/Aboutusimg.jpg";
import Avatar from "@material-ui/core/Avatar";
import { BrowserRouter as Router, Link } from "react-router-dom";


function Basket() {
  return (
    <div classname="basket" style={{display:"flex", alignItems:"center",
    justifyContent:"space-around", minHeight:"82vh"}}>
      <div classname="basket-one" style={{ marginBottom:"19vh"}}>
        <div className="basket-topup">
          <Avatar src={Aboutusimg} style={{ height: "10vh", width: "7vw" }} />
        </div>
        <div className="basket-nameoftop">User Name</div>

        <div className="basket-namestyle">
          <Link to="/" className="basket-Categories">
            Categories
          </Link>
          <div className="basket-myorders">My Orders </div>
          <div className="basket-wishlist">Wishlist</div>
          <div className="basket-ratings">My ratings & My reviews</div>
          <div className="basket-notification">Notifications</div>

          <div className="basket-logout">Logout</div>
        </div>
      </div>
      <div classname="basket-two" style={{display: "flex",flexDirection: "column"}} >
          <div className="basket-cart"> My Cart</div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmMufexLRa2s_6XGU9UZPBZsP2VzyuMCrVw&usqp=CAU" className="basket-img1" />
          <div className="basket-des">Money Plant</div>
          <div className="basket-taka">TK</div>
          <div className="basket-rating">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          <div className="basket-remove">Remove From basket</div>
          <img className="basket-img" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623877401-medium-plant-spider-plant-seafoam-pot_2048x.jpg?crop=1xw:1xh;center,top&resize=480:*" />
          <div className="basket-des">Gasworthia</div>
          <div className="basket-taka">TK</div>
          <div className="basket-rating">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
          <div className="basket-remove">Remove From basket</div>
      </div>
      <div classname="basket-three" style={{backgroundColor:"rgba(255, 172, 137, 0.09)", height:"30vh",width:"20vw"}}>
          <div className="basket-chechkout"> Items: </div>
          <div className="basket-chechkout"> Subtotal: </div>
          <div className="basket-chechkout"> Shipping cost: </div>
          <div className="basket-chechkout"> Total: </div>
          <Link to="/checkout" className="basket-chechkout1">Checkout</Link>
      </div>
    </div>
  );
}

export default Basket;
