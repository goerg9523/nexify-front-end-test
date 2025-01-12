import React, { useState, useEffect } from "react";
import styles from "./content-input.module.css";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ContentInput() {
  const { formData, setFormData } = useState({
    name: "",
    date: "",
    salary: 0,
    address: "",
    delete: false,
  });

  return (
    <>
      <div className={styles["contentData"]}>
        <input
          type="text"
          placeholder="Staff name"
          className={styles["nameInput"]}
        />
        <input type="date" className={styles["birthdayInput"]} />

        {/* slider */}
        <span className={styles["salarySection"]}>
          <input
            type="range"
            min={0}
            max={100000}
            className={styles["salarySlider"]}
          />
          <span className={styles["salaryValue"]}>80000</span>
        </span>
        <input
          type="text"
          placeholder="Entering the address"
          className={styles["addressInput"]}
        />
        <FaRegTrashCan />
        <div className={styles["line"]}></div>
      </div>
    </>
  );
}
