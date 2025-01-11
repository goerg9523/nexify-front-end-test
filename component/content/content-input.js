import React from "react";
import styles from "./content-input.module.css";

export default function ContentInput() {
  return (
    <>
      <input type="text" placeholder="Staff name" className={styles['nameTag']}/>
      <input type="date"/>
      <input type="range" min={0} max={100000}/>
      <span>salary</span>
      <input type="text" placeholder="Entering the address" />
      <div className={styles["line"]}></div>
    </>
  );
}
