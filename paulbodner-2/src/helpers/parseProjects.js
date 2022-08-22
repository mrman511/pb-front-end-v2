import ProjectItem from '../components/ProjectItem';

export const subData = [
  {
    id: 1,
    title: 'Dev Search',
    description: "Created during Udemy course Python Django - The Complete Course. This project many important Django features such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, Interacting with Models, Insite messaging. etc",
    image_path_name: 'devsearch',
    link: 'https://paul-devsearch.herokuapp.com/',
    github: 'https://github.com/mrman511/learn-django',
    iconList: [
      {
        id: 1,
        title: 'Python',
        image_path_name: 'python'
      },
    ]
  }
];

export function parseProjects(projectsData, currentItem) {
  const parsedProjects = projectsData.map((project) =>
    <ProjectItem 
    key={ project['id'] }
    title={ project.title }
    description={ project.description }
    imagePath={ project.image_path_name }
    iconList={ project.iconList }
    liveLink={ project.link }
    github={ project.github }
    />
  );


  return parsedProjects
}
