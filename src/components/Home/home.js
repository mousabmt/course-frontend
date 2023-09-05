import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Home() {
  const [Alldetps,setAlldepts]=useState([])
  const fetchDepts=async()=>{
    try {
      const depts=await axios.get(`${process.env.REACT_APP_LOCAL_HOST}/depts`)
      setAlldepts(depts.data)
    
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDepts();
  }, []);
  return (
    <div>
<h1>This is Home Page</h1>
    </div>
  )
}
