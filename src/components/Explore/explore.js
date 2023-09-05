import React, { useEffect, useState } from "react";
import axios from "axios";
import ExploreCards from "./exploreCards";
import "./exploreCards.scss";
import CoursesCards from "../Course/coursesCards";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Nav, Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
export default function Explore() {
  const [Alldepts, setAlldepts] = useState([]);
  const [Id, setId] = useState();
  const fetchDepts = async () => {
    try {
      const depts = await axios.get(
        `${process.env.REACT_APP_LOCAL_HOST}/depts`
      );
      setAlldepts(depts.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDepts();
  }, []);

  return (
    <div>
      <NavbarCollapse />
      <div className="cardsRows">
        {Alldepts.length &&
          Alldepts.map((depts, index) => {
            return (
              <div key={index}>
                <ExploreCards dept={depts} setId={setId} />
              </div>
            );
          })}
      </div>
   
    </div>
  );
}
