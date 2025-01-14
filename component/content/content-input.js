import React, { useState, useEffect } from "react";
import styles from "./content-input.module.css";
import { FaRegTrashCan } from "react-icons/fa6";
import ConfirmDelete from "../confirm-delete";

export default function ContentInput({
  formData,
  setFormData,
  deleteConfirmation,
  setDeleteConfirmation,
  setShowConfirmation,
  showConfirmation,
  setDeleteIndex,
}) {
  const [errorName, setErrorName] = useState({});
  const [errorDate, setErrorDate] = useState({});
  const [errorAddress, setErrorAddress] = useState({});
  // const [errorSalary, setErrorSalary] = useState({});

  // Name
  const handleNameChange = (e, i) => {
    const updatedName = [...formData.Data];
    const regexName = /^[A-Za-z\u4e00-\u9fa5,.-]+$/;
    updatedName[i].Name = e.target.value;
    setFormData({ ...formData, Data: updatedName });
    setErrorName((prev) => ({
      ...prev,
      [i]: !regexName.test(e.target.value),
    }));
  };

  //  Date
  const handleDateChange = (e, i) => {
    const updatedDate = [...formData.Data];
    const today = new Date();
    const inputDate = new Date(e.target.value);
    updatedDate[i].DateOfBirth = e.target.value;
    setFormData({ ...formData, Data: updatedDate });
    if (inputDate >= today) {
      setErrorDate((prev) => ({
        ...prev,
        [i]: true,
      }));
    } else {
      setErrorDate((prev) => ({
        ...prev,
        [i]: false,
      }));
    }
  };

  // Salary
  const handleSalaryValue = (e, i) => {
    const updatedSalary = [...formData.Data];
    updatedSalary[i].Salary = Number(e.target.value.replace(/[^0-9.-]+/g, ''));
    setFormData({ ...formData, Data: updatedSalary });
  };

  // Address
  const handleAddressChange = (e, i) => {
    const updatedAddress = [...formData.Data];
    const regexAddress = /^[A-Za-z\u4e00-\u9fa5,.-]+$/;
    updatedAddress[i].Address = e.target.value;
    setFormData({ ...formData, Data: updatedAddress });
    setErrorAddress((prev) => ({
      ...prev,
      [i]: !regexAddress.test(e.target.value) && e.target.value.length <= 200,
    }));
  };

  const handleDelete = (e, index) => {
    setShowConfirmation(true);
    setDeleteIndex(index);
  };

  // checking Data
  useEffect(() => {
    console.log("Fetching data successfully: ", formData);
    console.log(showConfirmation);
  }, [formData, showConfirmation]);

  return (
    <>
      {formData.Data && formData.Data.length > 0 ? (
        formData.Data.map((data, i) => {
          return (
            <div className={styles["contentData"]} key={i}>
              {/* Name */}
              <div className={styles["nameSection"]}>
                <input
                  type="text"
                  placeholder="Staff name"
                  className={styles["nameInput"]}
                  value={data.Name}
                  onChange={(e) => {
                    handleNameChange(e, i);
                  }}
                />
                {errorName[i] ? (
                  <div className={styles["errors"]}>
                    Maximum 50 characters, with no special symbols.
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* Date */}
              <div className={styles["dateSection"]}>
                <input
                  type="date"
                  className={styles["birthdayInput"]}
                  value={new Date(data.DateOfBirth).toISOString().split("T")[0]}
                  onChange={(e) => {
                    handleDateChange(e, i);
                  }}
                />
                {errorDate[i] ? (
                  <div className={styles["errors"]}>
                    The date should be earlier than today.
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* slider */}
              <span className={styles["salarySection"]}>
                <input
                  type="range"
                  min={0}
                  max={100000}
                  className={styles["salarySlider"]}
                  value={data.Salary}
                  step={1000}
                  onChange={(e) => {
                    handleSalaryValue(e, i);
                  }}
                />
                <span className={styles["salaryValue"]}>
                  <span>$</span>
                  <span
                    className={styles["salaryValueInside"]}
                    onChange={(e) => {
                      handleSalaryValue(e, i);
                    }}
                  />
                  {`${data.Salary.toLocaleString()}`}
                </span>
              </span>

              {/* Address */}
              <div className={styles["addressSection"]}>
                <input
                  type="text"
                  placeholder="Entering the address"
                  className={styles["addressInput"]}
                  value={data.Address}
                  onChange={(e) => {
                    handleAddressChange(e, i);
                  }}
                />
                {errorAddress[i] ? (
                  <div className={styles["errors"]}>
                    Maximum 200 characters, with no special symbols.
                  </div>
                ) : (
                  ""
                )}
              </div>

              {/* Delete */}
              <FaRegTrashCan
                className={styles["deleteIcon"]}
                onClick={(e) => {
                  handleDelete(e, i);
                }}
              />
            </div>
          );
        })
      ) : (
        <div>目前無資料</div>
      )}
    </>
  );
}
