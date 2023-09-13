import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './home.scss';
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
  <section id="hero">
      <div class="hero-content">
        <h1>Welcome to Your College Name</h1>
        <p>Your Gateway to Excellence</p>
        <a href="#about" class="cta-button">Learn More</a>
      </div>
    </section>
    <section className='homeExplore'>
      <section className='onTrend'>
<h2>What's On?</h2>
      </section>
    <section className='collegeCards'>

<section id="about">
  <div class="containerCollege">
    <h2>About Our College</h2>
    <p>Foothill College is regarded as one of the most beautiful and successful community colleges in the United States. Foothill’s reputation for excellence dates back to its founding Superintended/President Calvin C. Flint and founding Board of Trustees. In July of 1956, Henry M. Gunn, superintendent of Schools in Palo Alto, called a meeting of neighboring schools superintendents and board members to discuss the idea of forming a junior college. After 18 months of study, the formation of a community college district was approved by the California Department of Education. In January 1957, an interim Board of Trustees was appointed by the county superintendent of schools, including Merrill M. Vanderpool, chairman; Nathan C. Finch; A.P. Christiansen; Dr. Howard Diesner; and Dr. Robert Smithwick. In July, the first elected Board of Trustees was seated including Smithwick as chairman, Christiansen, Diesner, Mary Levine and Robert F. Peckham. A search for a new superintendent attracted Flint to head up the new district in March of 1958, leaving his post as president of Monterey Peninsula College.</p>
  </div>
</section>

<section id="programs">
  <div class="containerCollege">
    <Link to={'/Explore'}>Academic Programs</Link>
    <p>Explore our diverse range of academic programs designed to meet your educational goals.</p>
  </div>
</section>



<section id="contact">
  <div class="containerCollege">
    <Link to={'https://www.facebook.com/foothillcollege'}>Contact Us</Link >
    <p>Have questions or need assistance? Contact our team for support.</p>
  </div>
</section>
</section>
    </section>

  </div>
  )
}
