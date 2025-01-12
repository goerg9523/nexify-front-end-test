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

  const validateName = (name) => {
    const regexName = /^[A-Za-z\u4e00-\u9fa5,.-]+$/;
    return setErrorName(!regexName.test(name));
  };

  const validateDate = (date) => {
    const today = new Date().toISOString.split("T")[0];
    if (date < today) {
      setErrorDate(true);
    }
    return setErrorDate(false);
  };

  const validateAddress = (address) => {
    const regexAddress = /^[A-Za-z\u4e00-\u9fa5,.-]+$/;
    return setErrorAddress(
      !(regexAddress.test(address) && address.length <= 200)
    );
  };

  const handleSalaryValue = (e) => {
    let sv = e.target.value.replace(/[^0-9]/g, "");
    let fomattedSv = Number(sv).toLocaleString();
    setSalaryValue(fomattedSv);
    setSliderValue(sv);
  };

  useEffect(()=>{
    console.log("Fetching data successfully: ", formData);
    console.log(Array.isArray(formData.Data));
  }, [formData])

  return (
    <>
    {formData.Data ? formData.Data.map((data, i)=>{

    }) : ""}
      <div className={styles["contentData"]}>
        <div className={styles["nameSection"]}>
          <input
            type="text"
            placeholder="Staff name"
            className={styles["nameInput"]}
            // value={formData.name}
          />
          {errorName ? (
            <div className={styles["errors"]}>
              Maximum 50 characters, with no special symbols.
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={styles["dateSection"]}>
          <input
            type="date"
            className={styles["birthdayInput"]}
            // value={formData.date}
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
            value={sliderValue}
            step={1000}
            onChange={handleSalaryValue}
          />
          <span className={styles["salaryValue"]}>
            <span>$</span>
            <input
              type="text"
              value={`${salaryValue}`}
              className={styles["salaryValueInside"]}
              onChange={handleSalaryValue}
            />
          </span>
        </span>
        <div className={styles["addressSection"]}>
          <input
            type="text"
            placeholder="Entering the address"
            className={styles["addressInput"]}
          />
          {errorAddress ? (
            <div className={styles["errors"]}>
              Maximum 200 characters, with no special symbols.
            </div>
          ) : (
            ""
          )}
        </div>
        <FaRegTrashCan />
        <div className={styles["line"]}></div>
      </div>
    </>
  );
}
