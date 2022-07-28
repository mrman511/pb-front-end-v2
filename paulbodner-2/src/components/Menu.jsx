import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/fontawesome-free-brands';

export default function Menu(){

  return (
      
    <nav className="menu">
      <ul className="nav-list">
        <li><a href="">About Me</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>

      <div className="profile-links">
        <a href="https://github.com/mrman511" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={ faGithub } className='icon' />
        </a>
        <a href="https://www.linkedin.com/in/paul-bodner-a015a7a3/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='icon' />
        </a>
      </div>
    </nav>

  );
}
