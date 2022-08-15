import './App.scss';
import './components/styles/menu.scss'
import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Fullpage from './components/FullPage';

import { getProjectsData, getProjectsIcons } from './helpers/getProjectsData';
import { subData } from './helpers/parseProjects';




function App() {
  const [ showMenu, setShowMenu ] = useState(false);
  const [fullpageApi, setFullpageApi] = useState(undefined)
  const [page, setPage] = useState('abouts');
  const [baseProjectsData, setBaseProjectsData] = useState(undefined)
  const [projectsData, setProjectsData] = useState(subData)
  const [showProjects, setShowProjects] = useState(false);

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
  }

  const moveTo = (page) => {
    fullpageApi.moveTo(page);
    setPage(page)
    setShowMenu(false);
  }

  if (!baseProjectsData){
    getProjectsData(setBaseProjectsData);
  } else if (!baseProjectsData[0].iconList) {
    getProjectsIcons(baseProjectsData, setProjectsData);
  } 



  function getApi(fullpage){
    setFullpageApi(fullpage);
  }

  return (
    <>
      <div className='page'>
        <Banner toggleMenu = { toggleMenu } showMenu = { showMenu } />
        <Menu  showMenu={ showMenu } moveTo={ moveTo } />
      </div>
      <Fullpage showMenu={ showMenu } getApi={ getApi }  setPage={setPage} projectsData={ projectsData } showProjects={showProjects}/>
    </>
  );
}

export default App;
