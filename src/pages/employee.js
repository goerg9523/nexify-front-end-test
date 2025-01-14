import React, { useState, useEffect } from "react";
import axios from "axios";
import Buttons from "../../component/buttons";
import Title from "../../component/content/title";
import ContentInput from "../../component/content/content-input";
import ConfirmDelete from "../../component/confirm-delete";
import styles from "./employee.module.css";

export default function employee() {
  // const [dataFromButtons, setDataFromButtons] = useState({});
  const [formData, setFormData] = useState({});
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(0)
  

  useEffect(() => {
    axios
      .get(`http://nexifytw.mynetgear.com:45000/api/Record/GetRecords`)
      .then((response) => setFormData(response.data))
      .catch((error) => conlog.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    console.log("showConfirmation: ", showConfirmation);
  }, [showConfirmation]);

  return (
    <div className={styles["backColor"]}>
      <div className={`${styles["containBox"]} container bg`}>
        <Buttons setFormData={setFormData} formData={formData} />
        <Title />
        <ContentInput
          formData={formData}
          setFormData={setFormData}
          deleteConfirmation={deleteConfirmation}
          setDeleteConfirmation={setDeleteConfirmation}
          showConfirmation={showConfirmation}
          setShowConfirmation={setShowConfirmation}
          setDeleteIndex={setDeleteIndex}
        />
      </div>
      {showConfirmation ? (
        <ConfirmDelete
          setDeleteConfirmation={setDeleteConfirmation}
          setShowConfirmation={setShowConfirmation}
          deleteIndex={deleteIndex}
          setDeleteIndex={setDeleteIndex}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        ""
      )}
    </div>
  );
}
