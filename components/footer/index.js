import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";


function Footer() {
  return(
    <footer className={styles.footer}>
      Made by&nbsp;
      <Link href="7" target="_blank">
        Buğra Çantepe
      </Link>
    </footer>
  );
}

export default Footer;