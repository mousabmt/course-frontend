import React from 'react'
import './exploreCards.scss'
import { Link } from 'react-router-dom'
import CoursesCards from '../Course/coursesCards'
export default function ExploreCards({dept,setId}) {
const handleTrav=()=>{
    setId(dept.id)
console.log(dept.id);
}
    return (
    <div className='deptsCards'onClick={handleTrav} >
<Link   to={`/courses/${dept.id}`} className='link' >{dept.name} </Link>

    </div>
  )
}
