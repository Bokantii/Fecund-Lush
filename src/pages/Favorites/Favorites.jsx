import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/Footer/Footer";
const Favorites = () => {
  return (
    <section>
      <Header />
      <Banner heading="Favorites" />
      <h1
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "#333",
          fontSize: "2rem",
          fontWeight: "bold",
          
        }}
      >
        No favourites Yet.
      </h1>
      <Footer />
    </section>
  );
};

export default Favorites;
