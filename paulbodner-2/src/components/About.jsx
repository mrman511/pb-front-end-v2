import React from 'react';
import './styles/about.scss';
import './styles/text-animation.scss';
import { TagCloud } from 'react-tagcloud'

export default function About(props){
  const skills = [
    {value: 'JavaScript', count: 20 },
    {value: 'React', count: 20 },
    {value: 'Jest', count: 20 },
    {value: 'Cypress', count: 20 },
    {value: 'node.js', count: 20 },
    {value: 'Ruby', count: 20 },
    {value: 'Python', count: 20 },
    {value: 'Django', count: 20 },
    {value: 'PHP', count: 20 },
    {value: 'Laravel', count: 20 },
    {value: 'PostGresQL', count: 20 },
    {value: 'SQLite', count: 20 },
    {value: 'SASS', count: 20 },
    {value: 'Bootstap', count: 20 },
    {value: 'OOP', count: 20 },
  ]


  return (
    <div className='page shading me'>
      <div className='main'>
        <div className='info-section'>
          <h4>Hi There,</h4>

          <div className='animation-container'>
            <h3>
              I'm 
            </h3>
            <h2 className='hero glitch layers' data-text='Bodner'>
              <span>Paul</span>
            </h2>
          </div>

          <h5 >A full stack developer from Vancouver, Canada</h5>

          {/* <div className='cloud-contianer'>
            < TagCloud minSize={ 12 } maxSize={35} tags={ skills }/>
          </div> */}

        </div>
      </div>
    </div>
  );
}