import React from 'react'
import './experience.scss'

function Experience() {
  return (
    <div className='experience' id='experience'>
      <div className='header'>
        <h1>My Work Experience</h1>
      </div>
      <div className='experience-details'>
        <h2>Infosys,India — Systems Engineer</h2>
        <br />
        <h3>MARCH  2021 - PRESENT</h3>
        <br />
        <ul className='list'>
          <li>Served as a key member of the Software Development team for an Insurance Company</li>
          <li>Trained on React.js for 3 months</li>
          <li>Developed front end  components using React.js</li>
          <li>Used Cypress for unit testing</li>
          <li>Used Node.js for HTTP requests</li>
        </ul>
      </div>
    </div>
  )
}

export default Experience
