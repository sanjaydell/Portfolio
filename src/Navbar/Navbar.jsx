import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <h1 href='' className='logo'>Sanjay Anuchuri</h1>
          {/* <a href='' className='logo'>Anuchuri</a> */}
        </div>
        <div className='right'>
          <a href='#introduction' className='options'>Introduction</a>
          <a href='#experience' className='options'>Experience</a>
          <a href='#portfolio' className='options'>Technologies</a>
          <a href='#cover-page' className='options'>Websites</a>
          <a href='#contacts' className='options'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
