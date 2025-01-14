import React, { useEffect } from "react";
import styles from "./save.module.css";
import axios from "axios";

export default function Save({ formData }) {
  const saveUpdates = async () => {
    if (!formData) return;
    try {
      const response = await axios.post(
        `http://nexifytw.mynetgear.com:45000/api/Record/SaveRecords`,
        formData.Data
      );
      console.log("POST successful: ", response.data);
    } catch (error) {
      console.log("POST Falied: ", error);
    }
  };

  return <button className={`${styles["backColor"]} btn`} onClick={saveUpdates}>Save</button>;
}
