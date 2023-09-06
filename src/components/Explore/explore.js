import React, { useEffect, useState } from "react";
import axios from "axios";
import ExploreCards from "./exploreCards";
import "./exploreCards.scss";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Spinner } from "react-bootstrap";
export default function Explore() {
  const [Alldepts, setAlldepts] = useState([]);
  const [Id, setId] = useState();
  const [loading, setLoading] = useState(true);
  const fetchDepts = async () => {
    try {
      const depts = await axios.get(
        `${process.env.REACT_APP_LOCAL_HOST}/depts`
      );
      setAlldepts(depts.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepts();
  }, []);

  return (
    <div>
     <NavbarCollapse />
     <div className="mainDiv">
     <div className="cardsRows">
        {loading ? (<div className="loading-icon">
          <Spinner animation="border" variant="primary">
            <span className="loading"></span>
          </Spinner>
        </div> 
        ) : (
    
          Alldepts.length &&
          Alldepts.map((depts, index) => {
            return (
              <div key={index}>
                <ExploreCards dept={depts} setId={setId} />
              </div>
            );
          })
        )}
      </div>
     </div>
   
    </div>
  );
}
