import React, { useEffect, useState } from 'react';
import chevron from '../images/chevron.png'

import ProjectItem from './ProjectItem';

// import { projectsData } from '../dev-profile-data'

export default function ProjectList(){

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

  function changeProject(num){
    setShowProject(num);
    console.log("Change project SHOW: ", showProject)
  }

  console.log("SHOW: ", showProject)
  

  let parsedProjects = projectsData.map((project)=> 
    <ProjectItem 
    key={ project.id }
    title={ project.title }
    description={ project.description }
    imagePath={ project.imagePathName }
    iconList={ project.iconList }
    />
  )
  
  return (
    <>
      { parsedProjects[showProject] }
      <div className='project-switch' id="previous" onClick={() =>{ changeProject(0) } }>
        <img src={ chevron } alt="Next" />
      </div>
      <div className='project-switch' id="next" onClick={() =>{ changeProject(1) } }>
        <img src={ chevron } alt="Previous" />
      </div>
    </>
  );
  
}