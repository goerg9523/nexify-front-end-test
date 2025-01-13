import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchDB = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios
      .get(`http://nexifytw.mynetgear.com:45000/api/Record/GetRecords`)
      .then((response) => setFormData(response.data))
      .catch((error) => conlog.error("Error fetching data: ", error));
  }, []);

useEffect(()=>{
  console.log("useFetchDB 內的fromData: ", formData); 
},[formData])

  return { formData, setFormData };
};

export default useFetchDB;
