import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./Contact.module.scss";
import Banner from "../../components/banner/Banner";
const Contact = () => {
  return (
    <section className={classes.contactForm}>
      <Header />
      <Banner heading="Contact"/>
      <form action="#" >
        <section>
          <h1>Get in touch with us.</h1>
          <p style={{textAlign: "center"}}>
            If you have any questions, comments, or concerns, please fill out
            the form below and we will get back to you as soon as possible.
          </p>
        </section>
        <section>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </section>
        <section>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </section>
        <section>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </section>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </section>
  );
};

export default Contact;
