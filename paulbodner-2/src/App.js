import './App.scss';
import './components/styles/menu.scss'
import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Fullpage from './components/FullPage';




function App() {
  const [ showMenu, setShowMenu ] = useState(false);

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false)
    } else {
      setShowMenu(true)
    }
    console.log('TOGGLE MENU', showMenu);
  }

  return (
    <>
      <div className='page'>
        <Banner toggleMenu = { toggleMenu } showMenu = { showMenu } />
        <Menu  showMenu={ showMenu }/>
      </div>
      <Fullpage />
    </>
  );
}

export default App;
