import React, { useEffect, useState } from "react";
import axios from "axios";
import ScheduleCards from "./schduleCards";
import { Spinner } from "react-bootstrap";
import '../Classes/classesCards.scss'
export default function Schedule() {
    const [check,setCheck]=useState(1);
    console.log(check);
  const [scheduleClasses, setscheduleClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const classesSched = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LOCAL_HOST}/schedule`
      );
      const sched = response.data;
      setscheduleClasses(sched.classes);
      console.log(scheduleClasses);
      setLoading(false)
      
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    classesSched();
  }, [check]);
  return (
    <div className="tableDiv">
      <table className="cardsTable">
        <thead>
          <tr>
            <th>CRN</th>
            <th>title</th>
            <th>Units</th>
            <th>Type</th>
            <th>End</th>
            <th>Professor</th>
            <th>Days</th>
            <th>Time</th>
            <th>Hall</th>
            <th>Drop</th>
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
            scheduleClasses.length > 0 &&
            scheduleClasses.map((item) => <ScheduleCards allData={item} check={setCheck}key={item.course} />) 
          )}
        </tbody>
      </table>
    </div>
  );
}
