import React from "react";
import './styles/menu.scss'
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/fontawesome-free-brands';

export default function Menu(props){

  const {showMenu, moveTo } = props;


  return (
    <CSSTransition
    in={ showMenu }
    classNames="show-menu"
    timeout={ 750 }
    >
      <nav className="menu">
        <ul className="nav-list">
          <li className="page-link" onClick={ () => moveTo('abouts') } >About Me</li>
          <li className="page-link" onClick={ () => moveTo('projects') } >Projects</li>
          <li className="page-link" onClick={ () => moveTo('contact-me') } >Contact</li>
        </ul>

        <div className="profile-links">
          <a href="https://www.linkedin.com/in/paul-bodner-a015a7a3/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className='icon' />
          </a>
          <a href="https://github.com/mrman511" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={ faGithub } className='icon' />
          </a>
        </div>
      </nav>
    </CSSTransition>
  );
}
