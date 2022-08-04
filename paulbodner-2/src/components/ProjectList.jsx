import { useSlotProps } from '@mui/base';
import React, { useEffect, useState } from 'react';
import chevron from '../images/chevron.png'

import ProjectItem from './ProjectItem';

// import { projectsData } from '../dev-profile-data'

export default function ProjectList(props){
  // props.setPage('PROJECTS')
  const [showProject, setShowProject] = useState(0)

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
        if (showProject === (parsedProjects.length - 1)){
          setShowProject(0)
        } else {
          setShowProject(showProject + 1)
        }
      } else {
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
      <div className='project-switch' id="previous" onClick={() =>{ changeProject(false) } }>
        <img src={ chevron } alt="Next" />
      </div>
      <div className='project-switch' id="next" onClick={() =>{ changeProject(true) } }>
        <img src={ chevron } alt="Previous" />
      </div>
    </>
  );
  
}