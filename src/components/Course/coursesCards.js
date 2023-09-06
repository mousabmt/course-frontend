import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Courses from "./courses";
import { Spinner } from "react-bootstrap";
import './Course.scss'
export default function CoursesCards() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dataFetching = async () => {
    try {
      // Make an HTTP request to fetch data based on the 'id' parameter
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_HOST}/courses/${id}`
      );
      // Assuming the response.data contains your course data
      setData(response.data);
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
    <div className="CoursesPage">
      <div className="cardsGrid">
      {loading ? (
        <Spinner animation="border" variant="primary">
          <span className="loading"></span>
        </Spinner>
      ) : (
        data.length &&
        data.map((item) => <Courses allData={item} key={item.course} />)
      )}


      </div>
    </div>
  );
}
