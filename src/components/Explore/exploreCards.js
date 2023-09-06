import React from 'react';
import './exploreCards.scss';
import { Link } from 'react-router-dom';

export default function ExploreCards({ dept, setId }) {
    console.log(dept);
  const handleTrav = () => {
    setId(dept.id);
    console.log(dept.id);
  }
  return (
    <div className='deptsCards' onClick={handleTrav}>
      <Link to={`/courses/${dept.id}`} className='link'>
        <h3>{dept.name}</h3>
      </Link>
      <span>View Courses</span>
    </div>
  );
}
