import Link from "next/link";
import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="display-flex flex-direction-column align-items justify-content-center footer-main-container">
      <div className="footer-title">
        <Link href="/" className="headerTitle ">
          <p>
            Wembienti<span className="x">X</span>
          </p>
        </Link>
      </div>
      <div>
        <ul className="footerNavigation display-flex ">
          <Link href="/" className="navLink">
            <li>Home</li>
          </Link>
          <Link href="/about" className="navLink">
            <li>About</li>
          </Link>
          <Link href="/works" className="navLink">
            <li>Works</li>
          </Link>
          <Link href="/contact" className="navLink">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="footer-rights">
        <p className="footer-rights-text">
          © All rights reserved by Wembienti
          <span className="blue-color footer-x">X</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
