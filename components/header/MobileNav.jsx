import React from "react";
import styles from "./MobileNav.module.scss";
import Link from "next/link";
const MobileNav = ({ mobileNav }) => {
  const mobileNavClass = mobileNav ? styles.active : styles.inactive;
  return (
    <div className={`${styles.mobileNavContainer} ${mobileNavClass}`}>
      <ul className={styles.headerNavigation}>
        <Link href="/" className={styles.navLink}>
          <li>Home</li>
        </Link>
        <Link href="/about" className={styles.navLink}>
          <li>About</li>
        </Link>
        <Link href="/works" className={styles.navLink}>
          <li>Works</li>
        </Link>
        <Link href="/contact" className={styles.navLink}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default MobileNav;
