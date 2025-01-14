import React from "react";
import styles from "./confirm-delete.module.css";

export default function ConfirmDelete({
  setDeleteConfirmation,
  setShowConfirmation,
  deleteIndex,
  setDeleteIndex,
  formData,
  setFormData
}) {
  const handleConfrim = () => {
    setShowConfirmation(false);
    setDeleteConfirmation(true);
    if (deleteIndex !== null) {
      const deleteData = formData.Data.filter((v, i) => i !== deleteIndex);
      setFormData({ ...formData, Data: deleteData });
      setDeleteConfirmation(false);
      setDeleteIndex(0);
    }
  };

  const handleCancel = () => {
    // setDeleteConfirmation(false);
    setShowConfirmation(false);
    setDeleteIndex(0);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["check"]}>Are you sure to remove this column?</div>
      <div className={styles["buttons"]}>
        <button className={styles["okButton"]} onClick={handleConfrim}>
          Delete
        </button>
        <button className={styles["cancelButton"]} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
