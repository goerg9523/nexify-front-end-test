import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchDB = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://nexifytw.mynetgear.com:45000/api/Record/GetRecords`)
      .then((response) => setFormData(response.data))
      .catch((error) => conlog.error("Error fetching data: ", error));
  }, []);

  return { formData };
};

export default useFetchDB;
