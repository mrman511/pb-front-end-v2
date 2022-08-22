import React from "react";
import { CSSTransition } from 'react-transition-group';

import './styles/menu-button.scss';
import pbLogo from '../images/pb-logo.png';


export default function Banner(props){

  const { toggleMenu, showMenu } = props


  return (
    <CSSTransition
    in={ showMenu }
    classNames='hide-title'
    timeout={ 750 }
    >
      <nav className="banner">
          <img className="logo" src={ pbLogo }  />
          <div className="title">
            <h1 id="first" className="name">Paul</h1>
            <h1 id="middle" className="name">Bodner</h1>
            <h1 id="last" className="name">Developement</h1>              
          </div>
          <div className="menu-button-container">
            <CSSTransition
            in={ showMenu }
            classNames='McButton-full'
            timeout= { 750 } >

              <div className="McButton" onClick={() => { toggleMenu() }}>
                <b></b>
                <b></b>
                <b></b>
              </div>
            </CSSTransition>
          </div>
      </nav>
    </CSSTransition>
  );
}