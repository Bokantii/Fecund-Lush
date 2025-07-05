import React from "react";
import classes from "./Footer.module.scss";
import logo from "./../../assets/logo/fecund lush (black).png";
import { Link } from "react-router-dom";
const Footer = () => {
  const copyright = `Copyright \u00A9 ${new Date().getFullYear()} fecund lush. All rights reserved`;
  return (
    <footer className={classes.footerSection}>
      <section className={classes.footerContent}>
        <div className={classes.upperSection}>
          <section className={classes.brand_info}>
            <img src={logo} alt="" className={classes.logo} />
            <p className={classes.brand_address}> 
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </p>
          </section>
          <section className={classes.links}>
            {/* Links */}
            <div className={classes.linkSection}>
              <span className={classes.header}>Links</span>
              <ul>
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Shop</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Help */}
            <div className={classes.linkSection}>
              <span className={classes.header}>Help</span>
              <ul>
                <li>
                  <Link to="#">Payment Options</Link>
                </li>
                <li>
                  <Link to="#">Returns</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policies</Link>
                </li>
              </ul>
            </div>
            {/* Help */}
            <div className={classes.linkSection}>
              <span className={classes.header}>Newsletter</span>
              <form className={classes.newsLetterForm}>
                <span
                  style={{ borderBottom: "1px solid black",  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your Email address"
                    style={{ border: "none", outline: "none", padding: "0" }}
                  />
                </span>
                <span>
                  <button
                    style={{
                      textTransform: "uppercase",
                      backgroundColor: "#fff",
                      border:"none",
                      borderBottom: "1px solid black",
                    }}
                  >
                    subscribe
                  </button>
                </span>
              </form>
            </div>
          </section>
        </div>
        <div className={classes.copyright}>{copyright}</div>
      </section>
    </footer>
  );
};

export default Footer;
