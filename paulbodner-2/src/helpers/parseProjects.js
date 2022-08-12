import ProjectItem from '../components/ProjectItem';

export const projectsData = [
  {
    id: 1,
    title: 'Dev Search::ONE',
    description: "Created during Udemy course Python Django - The Complete Course. This project many important Django features such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, Interacting with Models, Insite messaging. etc",
    imagePathName: 'devsearch',
    iconList: ["python", "pgsql", "netlify"]
  },{
    id: 2,
    title: 'Pill Popper::TWO',
    description: "Created during Udemy course Python Django - The Complete Course. This project many important Django features such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, Interacting with Models, Insite messaging. etc",
    imagePathName: 'pillpopper',
    iconList: ["python", "pgsql", "netlify"]
  },{
    id: 3,
    title: 'Dev Search::THREE',
    description: "Created during Udemy course Python Django - The Complete Course. This project many important Django features such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, Interacting with Models, Insite messaging. etc",
    imagePathName: 'devsearch',
    iconList: ["python", "pgsql", "netlify"]
  }, {
    id: 4,
    title: 'Pill Popper::FOUR',
    description: "Created during Udemy course Python Django - The Complete Course. This project many important Django features such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, Interacting with Models, Insite messaging. etc",
    imagePathName: 'pillpopper',
    iconList: ["python", "pgsql", "netlify"]
  }, {
    id: 5,
    title: 'Dev Search::FIVE',
    description: "Created during Udemy course Python Django - The Complete Course. This project many important Django features such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, Interacting with Models, Insite messaging. etc",
    imagePathName: 'devsearch',
    iconList: ["python", "pgsql", "netlify"]
  }, {
    id: 6,
    title: 'Pill Popper::SIX',
    description: "Created during Udemy course Python Django - The Complete Course. This project many important Django features such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, Interacting with Models, Insite messaging. etc",
    imagePathName: 'pillpopper',
    iconList: ["python", "pgsql", "netlify"]
  }
];

export function parseProjects(projectData, currentItem) {
  const parsedProjects = projectData.map((project) => 
    <ProjectItem 
    key={ project['id'] }
    title={ project.title }
    description={ project.description }
    imagePath={ project.imagePathName }
    iconList={ project.iconList }
    />
  );

  // if (currentItem === 0 ){
  //   for (let i = 0; i < projectData.length; i++){
  //     let project = projectData[i];

  //     if (i === 0){
  //       parsedProjects.push( <ProjectItem 
  //         key={ project['id'] }
  //         title={ project.title }
  //         description={ project.description }
  //         imagePath={ project.imagePathName }
  //         iconList={ project.iconList }
  //         transitionGroup={'CURRENT'}
  //         />
  //       ); 
  //     } else if (i === 1){
  //       parsedProjects.push( <ProjectItem 
  //         key={ project['id'] }
  //         title={ project.title }
  //         description={ project.description }
  //         imagePath={ project.imagePathName }
  //         iconList={ project.iconList }
  //         transitionGroup={'NEXT'}
  //         />
  //       ); 
  //     } else if (i === (projectsData.length -1)){
  //       parsedProjects.push( <ProjectItem 
  //         key={ project['id'] }
  //         title={ project.title }
  //         description={ project.description }
  //         imagePath={ project.imagePathName }
  //         iconList={ project.iconList }
  //         transitionGroup={'PREVIOUS'}
  //         />
  //       ); 
  //     }
  //   }
  // } else if (currentItem === (projectsData.length - 1)){
  //   for (let i = 0; i < projectData.length; i++){
  //     let project = projectData[i];

  //     if (i === (projectsData.length - 1)){
  //       parsedProjects.push( <ProjectItem 
  //         key={ project['id'] }
  //         title={ project.title }
  //         description={ project.description }
  //         imagePath={ project.imagePathName }
  //         iconList={ project.iconList }
  //         transitionGroup={'CURRENT'}
  //         />
  //       ); 
  //     } else if (i === 0){
  //       parsedProjects.push( <ProjectItem 
  //         key={ project['id'] }
  //         title={ project.title }
  //         description={ project.description }
  //         imagePath={ project.imagePathName }
  //         iconList={ project.iconList }
  //         transitionGroup={'NEXT'}
  //         />
  //       ); 
  //     } else if (i === (projectsData.length - 2)){
  //       parsedProjects.push( <ProjectItem 
  //         key={ project['id'] }
  //         title={ project.title }
  //         description={ project.description }
  //         imagePath={ project.imagePathName }
  //         iconList={ project.iconList }
  //         transitionGroup={'PREVIOUS'}
  //         />
  //       ); 
  //     }  
  //   }
  // } else {
  //   for (let i = 0; i < projectData.length; i++){
  //     let project = projectData[i];

  //     if (i === currentItem){
  //       parsedProjects.push( <ProjectItem 
  //         key={ project['id'] }
  //         title={ project.title }
  //         description={ project.description }
  //         imagePath={ project.imagePathName }
  //         iconList={ project.iconList }
  //         transitionGroup={'CURRENT'}
  //         />
  //       ); 
  //     } else if (i === (currentItem + 1)){
  //       parsedProjects.push( <ProjectItem 
  //         key={ project['id'] }
  //         title={ project.title }
  //         description={ project.description }
  //         imagePath={ project.imagePathName }
  //         iconList={ project.iconList }
  //         transitionGroup={'NEXT'}
  //         />
  //         ); 
  //       } else if (i === (currentItem - 1)){
  //         parsedProjects.push( <ProjectItem 
  //           key={ project['id'] }
  //           title={ project.title }
  //           description={ project.description }
  //           imagePath={ project.imagePathName }
  //           iconList={ project.iconList }
  //           transitionGroup={'PREVIOUS'}
  //           />
  //         ); 
  //     }
  //   }
  // }

  return parsedProjects
}
