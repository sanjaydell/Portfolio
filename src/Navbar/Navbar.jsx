import React from 'react'
import './navbar.scss'
import NavContents from './NavContents'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <h1 href='' className='logo'>Sanjay Anuchuri</h1>
          {/* <a href='' className='logo'>Anuchuri</a> */}
        </div>
        <div className='right'>
          <NavContents />
        </div>
        <div class='dropdown'>
          <button class='dropbtn'>Menu 
            <i class='fa fa-caret-down'></i>
          </button>
          <div class='dropdown-content'>
            <NavContents />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Navbar
