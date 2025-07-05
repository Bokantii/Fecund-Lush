import React from "react";
import classes from "./Header.module.scss";
import logo from "./../../assets/logo/fecund lush (black).png";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className={classes.headerContainer}>
      <header className={classes.header}>
        <img src={logo} alt="logo" className={classes.logo} />
        <nav className={classes.linksNav}>
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
        <nav className={classes.iconLinksNav}>
          <ul className={classes.iconLinks}>
            <li>
              <Link to="/profile" className={classes.profile}>
                <FontAwesomeIcon icon={faUser} className={classes.userIcon} />
              </Link>
            </li>
            <li>
              <Link to="#" className={classes.profile}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={classes.userIcon}
                />
              </Link>
            </li>
            <li>
              <Link to="/favorites" className={classes.profile}>
                <FontAwesomeIcon icon={faHeart} className={classes.userIcon} />
              </Link>
            </li>
            <li>
              <Link to="/cart" className={classes.profile}>
                <FontAwesomeIcon icon={faCartShopping} className={classes.userIcon}/> 
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;
