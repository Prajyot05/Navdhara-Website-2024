import React from 'react'

function About() {
  return (
    <div className='about-us'>
      <div className="blur"></div>
      <div className="about-text">
            <h2>What is Navdhara?</h2>
            <p>Navdhara is the state-level project and poster presentation competition exclusively
            for first-year students. This exceptional event provides a unique platform for
            budding engineers to showcase their talent and untapped potential.</p>
            <p style={{padding: '1rem'}}>Navdhara aims to inspire and motivate the next generation of engineering students,
            offering them an unparalleled opportunity to shine and excel.</p>
            <h2 style={{paddingTop: '1rem'}}>Who Can Participate ?</h2>
            <p style={{textAlign: 'left'}}>First-Year Students of the 2023-24 Batch <br /> (Now Entering Their Second Year) <br />
   DEPARTMENT: </p>
<p style={{textAlign: 'left', paddingLeft: '2rem'}}>⦾ Computer Science / Information Technology / Artificial Intelligence / Data Science <br />
⦾ Electronics and Telecommunication / Electronics / Electrical / Instrumentation <br />
⦾ Mechanical / Mechatronics / Robotics / Production / Manufacturing <br />
⦾ Civil / Environmental / Chemical</p>
      </div>
      <div className="blur"></div>
    </div>
  )
}

export default About