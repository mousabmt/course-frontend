import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CoursesCards() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataFetching = async () => {
    try {
      
      // Make an HTTP request to fetch data based on the 'id' parameter
      const response = await axios.get(`${process.env.REACT_APP_LOCAL_HOST}/courses/${id}`);
      // Assuming the response.data contains your course data
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetching();
  }, [id]); // Fetch data whenever the 'id' parameter changes

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{data.title}</h1>
          {/* Render other data as needed */}
        </>
      )}
    </div>
  );
}

