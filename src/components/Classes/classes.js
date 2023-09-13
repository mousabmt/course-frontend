import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import ClassesCards from "./classesCards";
import './classesCards.scss'

export default function Classes() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchClass = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_HOST}/classes/${id}`
      );
      setData(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchClass();
  }, [id]);
  return (
    <div className="tableDiv">
    <table className="cardsTable">
      <thead>
        <tr>
          <th>CRN</th>
          <th>Title</th>
          <th>Start</th>
          <th>End</th>
          <th>Professor</th>
          <th>Days</th>
          <th>Time</th>
          <th>Location</th>
          <th>Take Seat</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan="7">
              <Spinner animation="border" variant="primary" />
            </td>
          </tr>
        ) : (
          data.length > 0 &&
          data.map((item) => (
            <ClassesCards allData={item} key={item.CRN} />
          ))
        )}
      </tbody>
    </table>
  </div>
  
  );
}
