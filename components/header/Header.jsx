"use client";
import React, { useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import "./Header.scss";
const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleMenuToggle = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <>
      <div className="header">
        <Link href="/" className="headerTitle">
          <p>
            Wembi<span className="x">X</span>
          </p>
        </Link>
        <ul className="headerNavigation">
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
        <Link href="/contact">
          <button className="headerButton">Let&apos;s talk</button>
        </Link>
        {!mobileNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="hamburger"
            onClick={handleMenuToggle}
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="inActivehamburger"
            onClick={handleMenuToggle}
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        )}
      </div>
      {mobileNav && <MobileNav mobileNav={mobileNav} />}
    </>
  );
};

export default Header;
