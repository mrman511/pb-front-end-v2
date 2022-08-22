import React, { useEffect, useState } from 'react';



import Scrollbar from './scrollbarComponents/Scrollbar';
import ScrollPrevious from './scrollbarComponents/ScrollPrevious';
import ScrollNext from './scrollbarComponents/ScrollNext';

import './styles/project-scroll-bar.scss';
import chevron from '../images/chevron.png'
// import { projectsData } from '../dev-profile-data'

//delete later
import { parsedProjects, parseProjects } from '../helpers/parseProjects';

export default function ProjectList(props){
  const { projectsData, showProjects } = props
  const [showProject, setShowProject] = useState(0);
  const [scroll, setScroll] = useState('CURRENT');
  const parsedProjects = parseProjects(projectsData, showProject);
  
  function changeProject(bool){
    if (bool){
      setScroll("NEXT");
      if (showProject === (projectsData.length - 1)){
        setShowProject(0)
      } else {
        setShowProject(showProject + 1)
      }
    } else {
      setScroll("PREVIOUS");
      if (showProject === 0){
        setShowProject(projectsData.length -1)
      } else {
        setShowProject(showProject -1);
      }
    }
  }

  return (
    <>
      { parsedProjects[showProject] }


      <div className='project-scroll-bar'>
        <img className='project-switch project-switch__previous' src={ chevron } alt="Previous"  onClick={() =>{ changeProject(false) }}/>

        { scroll === "PREVIOUS" && < ScrollPrevious setScroll={ setScroll }/> }
        { scroll === "CURRENT" && < Scrollbar /> }
        { scroll === "NEXT" && < ScrollNext setScroll={ setScroll }/> }
          
        <img className='project-switch project-switch__next' src={ chevron } alt="next" onClick={ () =>{ changeProject(true) }} />
      </div>
      
    </>
  );
  
}