import React from 'react';
import './styles/about.scss';
import './styles/text-animation.scss';

export default function About(props){
  // props.setPage('ABOUT');

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
        </div>
      </div>
    </div>
  );
}