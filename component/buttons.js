import React from "react";
import Add from "./buttons/add";
import Save from "./buttons/save";
import styles from "./buttons.module.css";

export default function Buttons({ formData, setFormData }) {
  return (
    <div className={styles["buttonContainer"]}>
      <Add setFormData={setFormData} />
      <Save formData={formData} />
    </div>
  );
}
