import React from 'react'

function TechLogos({ title, source }) {
  return (
    <div className='tech-block'>
      <img className='logos' src={source} alt={title} />
      <h4>{title}</h4>
    </div>
  )
}

export default TechLogos