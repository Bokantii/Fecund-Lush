import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./Products.module.scss";
import banner from "./../../assets/FECUND_LUSH _SHOP_vhunky.jpg";
import data from "../../model/data";
import ProductCard from "../../components/cards/ProductCard/ProductCard";
import Banner from "../../components/banner/Banner";
const Products = () => {
  return (
    <section className={classes.products}>
      <Header />
      <Banner heading="Shop"/>
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
      <Footer />
    </section>
  );
};

export default Products;
