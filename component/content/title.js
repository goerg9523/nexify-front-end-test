import React from "react";
import styles from "./title.module.css";

export default function Title() {
  return (
    <div>
      <ul className={styles['titlename']}>
      <li>Name</li>
      <li>Birthday</li>
      <li>Salary</li>
      <li>Address</li>
      </ul>
    </div>
  );
}
