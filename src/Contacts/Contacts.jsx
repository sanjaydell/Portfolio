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
          <img src='Contacts/gmail.png' alt=''  />
          <button>Mail Me</button>
        </a>
        <a href='https://www.linkedin.com/in/sanjay-kumar-anuchuri-61b750205'>
          <img src='Contacts/linkedin.png' alt='' />
          <button>Linked In</button>
        </a>
        <a href='https://github.com/sanjaydell' >
          <img src='Images/github.png' alt='' />
          <button>Git Hub</button>
        </a>
      </div>
    </div>
  )
}

export default Contacts
