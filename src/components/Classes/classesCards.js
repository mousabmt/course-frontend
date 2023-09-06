import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ClassesCards({ allData }) {

  const handleSaveSeat = () => {
   
  };
  return (
    <tr>
      <td>{allData.CRN}</td>
      <td>{allData.start}</td>
      <td>{allData.end}</td>
      <td>{allData.Professor}</td>
      <td>{allData.days}</td>
      <td>{allData.start_time}</td>
      <td>{allData.location}</td>
      <td>
        {allData.seats !== 0 ? (
          <Button variant="danger">Full</Button>
        ) : (
          <Button variant="primary" onClick={handleSaveSeat}>
            Save Seat
          </Button>
        )}
      </td>
    </tr>
  );
}
