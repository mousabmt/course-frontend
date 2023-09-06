import React from "react";
import "./Course.scss";
import { Link } from "react-router-dom";

export default function Courses({ allData }) {
  return (
    <div className="CoursesCards">
      <Link className="link" to={`/classes/${allData.dept}`}>
        <h3>{allData.title}</h3>
      </Link>
      <p>{allData.course}</p>
      <span>Enroll Now</span>
    </div>
  );
}