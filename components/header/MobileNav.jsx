import React from "react";
import "./MobileNav.scss";
import Link from "next/link";
const MobileNav = ({ mobileNav }) => {
  const mobileNavClass = mobileNav ? "active" : "inactive";
  return (
    <div className={`mobileNavContainer ${mobileNavClass}`}>
      <ul className="headerNavigationMobile">
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
  );
};

export default MobileNav;
