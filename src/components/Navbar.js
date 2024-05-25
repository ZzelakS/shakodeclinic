import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img className="Logo" src={Logo}/>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Products</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Services </Link>
        <Link to="/about"> About Us</Link>
        <Link to="/contact"> Book a Consultation </Link>
        <Link to="/contact"> Products </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
