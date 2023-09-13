
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ClassesCards({ allData }) {
const [takenSeat,settakenSeat]=useState(false);
const [count,setCount]=useState(1);
const CheckTaken =async ()=>{
  try {
    const exists=await axios.get(`${process.env.REACT_APP_LOCAL_HOST}/schedule`)
    console.log(exists.data);
    exists.data.classes.map((item)=>{
      if(item.crn===allData.CRN){
         settakenSeat(true)
    }
    else {
      settakenSeat(false)
    }
    })

 
  } catch (error) {
    console.log(error);
  }
}
  const handleSaveSeat = () => {
// We need to do axios post by CRN (allData.CRN) then we need to to do axios get in the schedule Page and we need to put a limit like 6 Classes at maximam 
const schedule=axios.post(`${process.env.REACT_APP_LOCAL_HOST}/schedule`,allData).then(()=> console.log('works fine'))  
setCount((count)=>count+1)
};
useEffect(()=>{
  CheckTaken()
},[count])
  return (
    <tr>
      <td>{allData.CRN}</td>
      <td>{allData.title}</td>
      <td>{allData.start}</td>
      <td>{allData.end}</td>
      <td>{allData.Professor}</td>
      <td>{allData.days}</td>
      <td>{allData.start_time}</td>
      <td>{allData.location}</td>
      <td>
        {!takenSeat? (allData.seats !== 0 ? (
          <Button variant="danger">Full</Button>
        ) : (
          <Button variant="primary" onClick={handleSaveSeat}>
            Save Seat
          </Button>
        )) : <Button variant="success"> Taken</Button>}
      </td>
    </tr>
  );
}
