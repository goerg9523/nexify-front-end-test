import React from "react";
import styles from "./confirm-delete.module.css";

export default function ConfirmDelete({
  setDeleteConfirmation,
  setShowConfirmation,
}) {
  const handleConfrim = () => {
    setDeleteConfirmation(true);
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setDeleteConfirmation(false);
    setShowConfirmation(false);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["check"]}>Are you sure to remove this column?</div>
      <div className={styles["buttons"]}>
        <button className={styles["okButton"]} onClick={handleConfrim}>
          OK
        </button>
        <button className={styles["cancelButton"]} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
