import React from "react";
import { CSSTransition } from 'react-transition-group';

import './styles/menu-button.scss';


export default function Banner(props){

  const { toggleMenu, showMenu } = props;

  return (
    <CSSTransition
    in={ showMenu }
    classNames='hide-title'
    timeout={ 750 }
    >
      <nav className="banner">
          <h1 className="logo" >B</h1>
          <h5 className="title">Paul Bodner Developement</h5>
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