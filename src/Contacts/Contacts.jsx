import React from 'react'
import './contacts.scss'

function Contacts() {
  return (
    <div className='contacts' id='contacts'>
      <div className='header'>
        <h1>My Contact Links</h1>
      </div>
      <div className='images'>
        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=sanjay.anuchuri@gmail.com'>
          <img className='gmail' src='Contacts/gmail.png' alt=''  />
          <div className='gmail-hover'>I am shown when someone hovers over the div above.</div>
        </a>
        <a href='https://www.linkedin.com/in/sanjay-kumar-anuchuri-61b750205'>
          <img src='Contacts/linkedin.png' alt='' />
        </a>
        <a href='https://github.com/sanjaydell' >
          <img src='Images/github.png' alt='' />
        </a>
      </div>
    </div>
  )
}

export default Contacts
