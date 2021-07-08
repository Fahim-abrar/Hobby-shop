import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FaceIcon from '@material-ui/icons/Face';
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
        <input type="text" className="navbar__searchInput" placeholder="Search" />
        <SearchIcon className="navbar__searchIcon" />
      </div>
      <div className="navbar-basket">
          <ShoppingBasketIcon/>
      </div>
      <Link to= "/customer" className="navbar-customer">
          <FaceIcon/>
      </Link>
      <div className="navbar-bell">
          <NotificationsIcon/>
      </div>

    </div>
  );
}

export default Navbar;
