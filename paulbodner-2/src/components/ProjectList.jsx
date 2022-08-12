import React, { useEffect, useState } from 'react';


import ProjectItem from './ProjectItem';
import Scrollbar from './scrollbarComponents/Scrollbar';
import ScrollPrevious from './scrollbarComponents/ScrollPrevious';
import ScrollNext from './scrollbarComponents/ScrollNext';

import './styles/project-scroll-bar.scss';
import chevron from '../images/chevron.png'
// import { projectsData } from '../dev-profile-data'

export default function ProjectList(props){
  // props.setPage('PROJECTS')
  const [showProject, setShowProject] = useState(0);
  const [scroll, setScroll] = useState('CURRENT');

  
  // let { projectsData } = require('../dev-profile-data')
  let projectsData = [
    {
      id: 1,
      title: 'Dev Search',
      description: "Created during Udemy course Python Django - The Complete Course. This project many important Django features such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, Interacting with Models, Insite messaging. etc",
      imagePathName: 'devsearch',
      iconList: ["python", "pgsql", "netlify"]
    },{
      id: 2,
      title: 'Pill Popper',
      description: "Created during Udemy course Python Django - The Complete Course. This project many important Django features such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, Interacting with Models, Insite messaging. etc",
      imagePathName: 'pillpopper',
      iconList: ["python", "pgsql", "netlify"]
    }, 
  ];
  
  // const projectScrollCountItems = 
  
  let parsedProjects = projectsData.map((project)=> 
  <ProjectItem 
  key={ project['id'] }
  title={ project.title }
  description={ project.description }
  imagePath={ project.imagePathName }
  iconList={ project.iconList }
  />
  )
  
  function changeProject(bool){
    if (bool){
      setScroll("NEXT");
      if (showProject === (parsedProjects.length - 1)){
        setShowProject(0)
      } else {
        setShowProject(showProject + 1)
      }
    } else {
      setScroll("PREVIOUS");
      if (showProject === 0){
        setShowProject(parsedProjects.length -1)
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