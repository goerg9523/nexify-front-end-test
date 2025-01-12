import React from "react";
import styles from "./title.module.css";

export default function Title() {
  return (
    <>
      <div>
        <ul className={styles["titles"]}>
          <li className={styles["titleName"]}>Name</li>
          <li className={styles["titleBirthday"]}>Birthday</li>
          <li className={styles["titleSalary"]}>Salary</li>
          <li className={styles["titleAddress"]}>Address</li>
          <li className={styles["titleDelete"]}></li>
        </ul>
      </div>
    </>
  );
}
