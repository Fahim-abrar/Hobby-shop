import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FaceIcon from '@material-ui/icons/Face';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <h3 href="/home">Hobby Shop</h3>
      </div>
      <div className="navbar-search">
        <input type="text" className="navbar__searchInput" placeholder="Search" />
        <SearchIcon className="navbar__searchIcon" />
      </div>
      <div className="navbar-basket">
          <ShoppingBasketIcon/>
      </div>
      <div className="navbar-customer">
          <FaceIcon/>
      </div>
      <div className="navbar-bell">
          <NotificationsIcon/>
      </div>

    </div>
  );
}

export default Navbar;
