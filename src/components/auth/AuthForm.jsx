import React from "react";
import classes from "./AuthForm.module.scss";
import bgImg from "./../../assets/prod14.jpg";
import logo from "./../../assets/logo/fecund lush (black).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const AuthForm = () => {
  return (
    <section className={classes.authFormContainer}>
      <section className={classes.authForm}>
        <img src={bgImg} alt="" />
        <form action="#">
          <FontAwesomeIcon icon={faGoogle} />
          <img src={logo} alt="logo" className={classes.logo} />
          <section className={classes.profileForm}>
            <div className={classes.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit">Create account</button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default AuthForm;
