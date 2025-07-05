import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/logo/fecund lush (black).png";
import classes from "./Profile.module.scss";
import AuthForm from "../../components/auth/AuthForm";
const Profile = () => {
  return (
    <section>
      <Header />
      <h1>Profile Page</h1>
       <img src="" alt="" />
       <AuthForm/>
      {/* <Footer /> */}
    </section>
  );
};

export default Profile;
