import axios from "axios";

export function getProjectsData(setProjectsData) {
  axios.get((process.env.REACT_APP_PAULBODNER_API || 'http://localhost:8081') + "/projects").then(({ data }) => {
    setProjectsData(data)
  }).catch(error => { console.log("There has been an error: ", error) })
}

async function icons(project) {
  axios.get((process.env.REACT_APP_PAULBODNER_API || 'http://localhost:8081') + `/projects/${project.id}`).then(({ data }) => { return data })
}

export function getProjectsIcons(projectsData, setProjectsData){
  console.log('INSIDE GET ICONS');
  const projectsArray = [];
  const promises = [];

  for (let project of projectsData){
    promises.push(axios.get((process.env.REACT_APP_PAULBODNER_API || 'http://localhost:8081') + `/projects/${project.id}`));
  }

  Promise.all(promises).then((response) => { 
    for (let i in response){
      projectsData[i].iconList = response[i].data;
      projectsArray.push(projectsData[i]);
    } 
    console.log('PROJECTS ARRAY: ', projectsArray)
    setProjectsData(projectsArray);
  })
}