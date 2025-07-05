import React from "react";
import classes from "./Banner.module.scss";
const Banner = ({ heading }) => {
  return (
    <>
      <section className={classes.banner}></section>
      <h3>{heading}</h3>
    </>
  );
};

export default Banner;
