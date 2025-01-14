import React from "react";
import styles from "./add.module.css";
// import useFetchDB from "../hooks/fetchDB";

export default function Add({ setFormData }) {
  // const { formData, setFormData } = useFetchDB();

  const handleAddData = () => {
    const today = new Date();
    const newItem = {
      Name: "",
      DateOfBirth: today,
      Salary: 0,
      Address: "",
    };

    setFormData((item) => {
      const addnew = { ...item, Data: [...item.Data, newItem] };
      return addnew;
    });
  };

  return (
    <button className={`${styles["backColor"]} btn`} onClick={handleAddData}>
      Add
    </button>
  );
}
