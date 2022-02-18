import React from 'react'
import Navbar from './Navbar/Navbar'
import Introduction from './Introduction/Introduction'
import CoverPage from './CoverPage/CoverPage'
import Portfolio from './Portfolio/Portfolio'
import Experience from './Experience/Experience'
import Contacts from './Contacts/Contacts'
import './app.scss'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='profile-pic'>
        <img src='sanjay.jpg' className='profile-pic' alt='Sanjay' style={{ float: 'right', width: '20vw', height: '40vh'}}/>
      </div>
      <div className='sections'>
        <Introduction />
        <Experience />
        <Portfolio />
        <CoverPage />
        <Contacts />
      </div>
    </div>
  )
}

export default App
