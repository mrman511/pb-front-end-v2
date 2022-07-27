import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';


import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact'

export default function Fullpage() {
  
  return (
    <ReactFullpage
    //fullpage options
    licenseKey = { process.env.REACT_APP_FULLPAGE_KEY }
    scrollingSpeed = {1000} /* Options here */
    scrollHorizontally = {true}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <About />
          </div>

          <div className="section">
            <Projects />
          </div>

          <div className="section">
            <Contact />
          </div>

        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}
