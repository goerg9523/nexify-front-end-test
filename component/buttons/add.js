import React from "react";
import styles from "./add.module.css";
import useFetchDB from "../hooks/fetchDB";

export default function Add() {
  const { formData, setFormData } = useFetchDB();

  const handleAddData = () => {
    const newItem = {
      Name: "",
      DateOfBirth: "",
      Salary: 0,
      Address: "",
    };

    setFormData((item) => {
      const addnew = { ...item, Data: [...item.Data, newItem] };
      return { ...addnew };  // 強制返回新物件
    });

  };

  return (
    <button className={`${styles["backColor"]} btn`} onClick={handleAddData}>
      Add
    </button>
  );
}
