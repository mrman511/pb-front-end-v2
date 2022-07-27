import React from 'react';

import Background from '../images/devsearch.png'
import Devsearch from '../images/devsearch-mobile.png'


export default function Projects(){
  let iconList = ["python", "pgsql", "netlify"];

  let parsedIconList = iconList.map((icon) => {
    return (
      <div className="icon-container">
        <img src={ require(`../images/${icon}-icon.png`) } alt={icon} className='icon'/>
      </div>
    );
  });

  
  
  return (
    <article className='page' style={{ backgroundImage: "url("+ Background +")" }}>
      <div className='page shading'>
        <div className='main project'>
          <div className='project-info'>
            <h5>Dev Search</h5>
            <p>
              Created during Udemy course Python Django - The Complete Course. This project many important Django features
              such as User Authentication, Admin User, Password Recovery, User Profiles, User Owned Models, 
              Interacting with Models, Insite messaging. etc
            </p>
            <h6>Created Using</h6>
            <div className='project-icons'>
              { parsedIconList }
            </div>
          </div>

          <div className='image-container'>
            <img src={ Devsearch } alt="" />
          </div>
        </div>
      </div>
    </article>
  );
}