import styles from "./styles.module.css";

import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

function Header() {
  return (
  <header className={`${styles.Header} container fluid`}>
    <div className={styles.headerWrapper}>
    <Link href="/" className={styles.logo}>
      <FaPlayCircle /> NETFIMS
    </Link>

    <nav className={styles.navigationMenu}>
      <Link href="/">Movies</Link>
      <Link href="/">Series</Link>
      <Link href="/">Kids</Link>

    </nav>
    </div>
  </header>);
}

export default Header;