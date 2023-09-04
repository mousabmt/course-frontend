import React from 'react'
import './exploreCards.scss'
import { Link } from 'react-router-dom'
import CoursesCards from '../Course/coursesCards'
export default function ExploreCards({depts,setId}) {
const handleTrav=()=>{
    setId(depts.id)

}
    return (
    <div className='deptsCards'onClick={handleTrav} >
<Link  to='/courses' className='link' >{depts.name} </Link>

    </div>
  )
}
