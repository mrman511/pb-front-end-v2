import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

// import fullpage_api from 'window';
import Menu from './Menu';

import About from './About';
import Skills from './Skills';
import ProjectList from './ProjectList';
import Contact from './Contact'
import { useSlotProps } from '@mui/base';


export default function Fullpage(props) {
  const { moveTo, getApi } = props

  return (
    <ReactFullpage
    //fullpage options
    licenseKey = { process.env.REACT_APP_FULLPAGE_KEY }
    scrollingSpeed = {1000} /* Options here */

    anchors= {['abouts', 'projects', 'contact-me']}
    // sectionSelector={'.about'}

    render={({ state, fullpageApi }) => {
      
      getApi(fullpageApi);

      return (
        <ReactFullpage.Wrapper>
          <div className="section abouts" >
            <About setPage={ props.setPage }/>
          </div>

          <div className="section projects" >
            <ProjectList setPage={ props.setPage }/>
          </div>

          <div className="section contact-me" >
            <Contact setPage={ props.setPage }/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}
