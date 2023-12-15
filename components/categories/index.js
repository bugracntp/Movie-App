import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";



function Categories({ categories }) {
  return (
    <div className={styles.categories}>
      {categories && categories.map(category => (
          <Link
            key={category.id}
            className={styles.category}
            href={`/${category.id}`}
          >
            <div className={styles.name}>{category.name}</div>
          </Link>
      ))}
    </div>
  );
}


export default Categories;

