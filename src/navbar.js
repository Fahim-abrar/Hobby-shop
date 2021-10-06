import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FaceIcon from '@material-ui/icons/Face';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/Aboutus" className="navbar-header">
        <h3 href="/home">Hobby Shop</h3>
      </Link>
      <div className="navbar-search">
      <SearchIcon className="navbar__searchIcon" style={{height:"3.15vh"}}/>
        <input type="text" className="navbar__searchInput" placeholder="Search" />
        
      </div>
      <div className="navbar-icons">
      <Link to="/basket" className="navbar-basket" style={{color:"black", paddingRight:"1vw"}}>
          <ShoppingBasketIcon/>
      </Link>
      <Link to= "/customer" className="navbar-customer" style={{color:"black", paddingRight:"1vw"}}>
          <FaceIcon/>
      </Link>
      <Link to= "/Notipage" className="navbar-bell" style={{color:"black", paddingRight:"1vw"}}>
          <NotificationsIcon/>
      </Link>
      <Link to="/Signin" className="navbar-signinlogo" style={{color:"black", paddingRight:"1vw"}}>
           <AccountCircleIcon/>
      </Link>
       </div>
    </div>
  );
}

export default Navbar;
