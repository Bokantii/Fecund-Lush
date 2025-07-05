import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";
import CategoryCard from "../../components/cards/CategoryCard/CategoryCard";
import ProductCard from "../../components/cards/ProductCard/ProductCard";
import { products } from "../../product";
import prod24 from "./../../assets/prod24.jpg";
import prod28 from "./../../assets/prod28.jpg";
import prod13 from "./../../assets/prod13.jpg";
import prod16 from "./../../assets/prod16.jpg";
import prod97 from "./../../assets/prod97.jpeg";
import data from "../../model/data";
import {
  motion,
  useScroll,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
const Home = () => {
  const { scrollY } = useScroll();
  const scaleText = useTransform(scrollY, [0, 200], [1.5, 1]);
  const scaleContentText = useTransform(scrollY, [0, 110], [5, 1]);
  const yText = useTransform(scrollY, [0, 300, 300, 500], [0, 50, 50, -140]);
  const yContentText = useTransform(
    scrollY,
    [0, 300, 300, 500],
    [0, 50, 50, 0]
  );
  const scrollNew = useTransform(scrollY, [0, 600], [200, 100]);

  const prodCategories = [
    {
      // imgURL:
      //   "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      imgURL: prod97,
      title: "title 1",
      initialX: -600,
      finalX: 0,
      initialY: 0,
      finalY: 0,
    },
    {
      // imgURL:
      //   "https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D",

      imgURL: prod16,
      title: "title 2",
      initialX: 0,
      finalX: 0,
      initialY: 600,
      finalY: 0,
    },
    {
      // imgURL:
      //   "https://images.unsplash.com/photo-1562424995-2efe650421dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      imgURL: prod13,
      title: "title 3",
      initialX: 600,
      finalX: 0,
      initialY: 0,
      finalY: 0,
    },
  ];
  return (
    <section className={classes.home}>
      <Header />
      {/* Hero Section */}
      <section className={classes.heroSection}>
        <section className={classes.heroContent}>
          <h3>New Arrival</h3>
          <span className={classes.heading}>Discover our new collection</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad nihil
            fugit quod labore commodi cum minima et? Repudiandae placeat
            provident labore dolorum minus cupiditate omnis mollitia facere.
            Veniam, doloribus et.
          </p>
          <Link to="#" className={classes.shopNow}>
            Shop Now
          </Link>
        </section>
      </section>
      {/* Body */}
      <section className={classes.productRange}>
        <section className={classes.categories}>
          <motion.div
            className={classes.categories_heading}
            style={{ scale: scaleText, y: yText }}
          >
            <motion.h2 style={{ scale: scaleContentText, y: yContentText }}>
              step into style
            </motion.h2>
            <motion.p style={{ scale: scaleContentText, y: yContentText }}>
              Explore our latest picks curated just for you.
            </motion.p>
          </motion.div>
          <section
            className={`${classes.categoryList} ${{ width: `${scrollNew}vw` }}`}
          >
            {prodCategories.map((category, index) => (
              <CategoryCard
                key={index}
                imgURL={category.imgURL}
                title={category.title}
                initialX={category.initialX}
                finalX={category.finalX}
                initialY={category.initialY}
                finalY={category.finalY}
              />
            ))}
          </section>
        </section>
        <motion.h2 style={{ scale: scaleContentText, y: yContentText }}>Our products</motion.h2>
        <section className={classes.productList}>
          {data.map((product, index) => (
            <ProductCard
              key={index}
              imgURL={product.imgURL}
              imgAlt={product.imgAlt}
              desc={product.desc}
              price={product.price}
              title={product.title}
            />
          ))}
        </section>
        <Link to="#" className={classes.view_more}>View more</Link>
      </section>
      <Footer />
    </section>
  );
};

export default Home;
