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
}) {
  const [errorName, setErrorName] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);

  // Name
  const handleNameChange = (e, i) => {
    const updatedName = [...formData.Data];
    updatedName[i].Name = e.target.value;
    setFormData({ ...formData, Data: updatedName });
  };

  const validateName = (name) => {
    const regexName = /^[A-Za-z\u4e00-\u9fa5,.-]+$/;
    return setErrorName(!regexName.test(name));
  };

  //  Date
  const handleDateChange = (e, i) => {
    const updatedDate = [...formData.Data];
    updatedDate[i].DateOfBirth = e.target.value;
    setFormData({ ...formData, Data: updatedDate });
  };

  const validateDate = (date) => {
    const today = new Date().toISOString.split("T")[0];
    const inputDate = new Date(date);
    if (inputDate >= today) {
      return setErrorDate(true);
    } else {
      return setErrorDate(false);
    }
  };

  // Address
  const handleAddressChange = (e, i) => {
    const updatedAddress = [...formData.Data];
    updatedAddress[i].Address = e.target.value;
    setFormData({ ...formData, Data: updatedAddress });
  };

  const validateAddress = (address) => {
    const regexAddress = /^[A-Za-z\u4e00-\u9fa5,.-]+$/;
    return setErrorAddress(
      !(regexAddress.test(address) && address.length <= 200)
    );
  };

  // Salary
  const handleSalaryValue = (e, i) => {
    const updatedSalary = [...formData.Data];
    updatedSalary[i].Salary = Number(e.target.value.toLocaleString());
    setFormData({ ...formData, Data: updatedSalary });
  };

  // Delete
  const confirmDelete = () => {
    setShowConfirmation(true);
  };

  const handleDelete = (e, index) => {
    setShowConfirmation(true);
    if (deleteConfirmation) {
      const deleteData = formData.Data.filter((v, i) => i !== index);
      setFormData({ ...formData, Data: deleteData });
      setDeleteConfirmation(false);
    }
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
                {errorName ? (
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
                {errorDate ? (
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
                  <input
                    type="text"
                    value={`${data.Salary.toLocaleString()}`}
                    className={styles["salaryValueInside"]}
                    onChange={(e) => {
                      handleSalaryValue(e, i);
                    }}
                  />
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
                {errorAddress ? (
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
