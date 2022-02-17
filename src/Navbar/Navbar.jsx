import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='' className='logo'>Sanjay</a>
        </div>
        <div className='right'>
          <a href='#introduction' className='options'>Introduction</a>
          <a href='#cover-page' className='options'>Cover Page</a>
          <a href='#experience' className='options'>Experience</a>
          <a href='#portfolio' className='options'>Portfolio</a>
          <a href='#contacts' className='options'>Contacts</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
