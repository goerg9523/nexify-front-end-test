import React, { useState, useEffect } from "react";
import styles from "./content-input.module.css";
import { FaRegTrashCan } from "react-icons/fa6";
import useFetchDB from "../hooks/fetchDB";

export default function ContentInput() {
  const { formData } = useFetchDB();
  const [salaryValue, setSalaryValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [errorName, setErrorName] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [formattedData, setFormattedData] = useState([]);

  const validateName = (name) => {
    const regexName = /^[A-Za-z\u4e00-\u9fa5,.-]+$/;
    return setErrorName(!regexName.test(name));
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

  const validateAddress = (address) => {
    const regexAddress = /^[A-Za-z\u4e00-\u9fa5,.-]+$/;
    return setErrorAddress(
      !(regexAddress.test(address) && address.length <= 200)
    );
  };

  const handleNameChange = (e) => {
    e.target.preventDefault;
  };

  const handleDateChange = (e) => {
    e.target.preventDefault;
  };

  const handleAddressChange = (e) => {
    e.target.preventDefault;
  };

  const handleSalaryValue = (salary) => {
    let target = formData.Data.find((v, i) => {
      v.Salary === salary;
    });
    if (target) {
      let formatted = Number(target.Salary).toLocaleString();
      setSalaryValue(formatted);
      setSliderValue(target.Salary);
      console.log(target.Salary);
    }
  };

  useEffect(() => {
    console.log("Fetching data successfully: ", formData);
    // console.log(Array.isArray(formData.Data));
  }, [formData]);

  
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
                    handleNameChange(e);
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
                    handleDateChange(e);
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
                  onChange={handleSalaryValue}
                />
                <span className={styles["salaryValue"]}>
                  <span>$</span>
                  <input
                    type="text"
                    value={`${data.Salary.toLocaleString()}`}
                    className={styles["salaryValueInside"]}
                    onChange={handleSalaryValue}
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
                    handleAddressChange(e);
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
              <FaRegTrashCan />
            </div>
          );
        })
      ) : (
        <div>目前無資料</div>
      )}
    </>
  );
}
