import React from "react";
import classes from "./CategoryCard.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const CategoryCard = ({ title, imgURL, addedClassName,initialX,finalX,initialY,finalY}) => {
  const { scrollY } = useScroll();
  const x=useTransform(scrollY,[0,900],[initialX,finalX]);
  const y=useTransform(scrollY,[0,900],[initialY,finalY]);
  return (
    <motion.section
      className={`${classes.categoryCard} ${addedClassName || ""} `}
      style={{x,y}}
    >
      <img src={imgURL} alt="img"/>
      <p className={classes.title}>{title}</p>
    </motion.section>
  );
};

export default CategoryCard;
