import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
export default function CoursesCards({ Id }) {
  const [getData, setGetData] = useState([]);

  const dataFetching = async () => {
    try {
      const res = await axios.post(`${process.env.URL}/courses/${Id}`, Id);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dataFetching();
  }, []);
  return (
    <div>
      <h1>TESSSSSSSSSST</h1>
    </div>
  );
}
