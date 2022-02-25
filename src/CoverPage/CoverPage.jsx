import React from 'react'
import './coverpage.scss'

function CoverPage() {
  return (
    <div className='cover-page' id='cover-page'>
      <div className='header'>
        <h1>My Websites</h1>
      </div>
      <div className='websites'>
        <div className='left'>
          <img src='Quick-note.png' alt ='QuickNotes' />
          <div className='button'>
            <div className='text'>
              <a href='https://quick-notes-reactjs.netlify.app/'>
                Go to website
              </a>
            </div>
            {/* <a href='https://quick-notes-reactjs.netlify.app/'>
              Go to website
            </a> */}
          </div>
        </div>
        <div className='left'>
          <img src='Facebook.png' alt='fb' />
          <div className='button'>
            <div className='text'>
                <a href='https://sanjay-book.herokuapp.com/'>
                  Go to website
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoverPage
