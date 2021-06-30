import React from "react";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";

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
    </div>
  );
}

export default Navbar;
