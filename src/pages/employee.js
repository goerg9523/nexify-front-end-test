import React from "react";
import Buttons from "../../component/buttons";
import Title from "../../component/content/title";
import ContentInput from "../../component/content/content-input";
import styles from "./employee.module.css";

export default function employee() {
  return (
    <div className={styles['backColor']}>
      <div className={`${styles["containBox"]} container bg`}>
        <Buttons />
        <Title />
        <ContentInput />
      </div>
    </div>
  );
}
