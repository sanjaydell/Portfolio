import React from 'react'
import './portfolio.scss'
import TechLogos from './TechLogos'

function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='header'>
        <h1> My Languages and Tools</h1>
      </div>
      <div className='images'>
        <TechLogos title='React.js' source='Images/react.png' />
        <TechLogos title='HTML' source='Images/htmlpng.png' />
        <TechLogos title='Javascript' source='Images/js.png' />
        <TechLogos title='CSS' source='Images/css.png' />
        <TechLogos title='SASS' source='Images/sass.png' />
        <TechLogos title='MySql' source='Images/sqlpng.png' />
        <TechLogos title='Firebase' source='Images/firebase.png' />
        <TechLogos title='Github' source='Images/github.png' />
        <TechLogos title='Gitlab' source='Images/gitlab.png' />
        <TechLogos title='VS Code' source='Images/vspng.png' />
        <TechLogos title='Cypress' source='Images/cypress.jpg' />
        <TechLogos title='Ruby' source='Images/ruby.jpg' />
        <TechLogos title='Rails' source='Images/rails.png' />
        <TechLogos title='Node.js' source='Images/Nodejs.jpg' />
      </div>
    </div>
  )
}

export default Portfolio
