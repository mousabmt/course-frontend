import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
export default function ScheduleCards({ allData, check }) {
  const deleteCourse = () => {
    try {
      axios.delete(
        `${process.env.REACT_APP_LOCAL_HOST}/schedule/${allData.crn}`
      );
      check((count) => count + 1);
     
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr>
      <td>{allData.crn}</td>
      <td>{allData.title}</td>
      <td>{allData.units}</td>
      <td>{allData.type}</td>
      <td>{allData.end_time}</td>
      <td>{allData.professor}</td>
      <td>{allData.days}</td>
      <td>{allData.start_time}</td>
      <td>{allData.section}</td>
      <td>
        <Button size="sm" onClick={deleteCourse} variant="danger">
          Drop Course
        </Button>
      </td>
    </tr>
  );
}
