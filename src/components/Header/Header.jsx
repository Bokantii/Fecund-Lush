import React from "react";
import classes from "./Header.module.scss";
import logo from "./../../assets/logo/fecund lush (black) icon only.png";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // ✅ Correct import
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" className={classes.logo} />
      <nav>
        <ul className={classes.links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Link to='/profile' className={classes.profile}>
        <FontAwesomeIcon icon={faUser} className={classes.userIcon} />
      </Link>
    </header>
  );
};

export default Header;
