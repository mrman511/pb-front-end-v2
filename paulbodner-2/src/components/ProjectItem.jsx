import React from "react";
import { useMediaQuery } from "@mui/material";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,   } from '@fortawesome/fontawesome-free-brands';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


export default function ProjectItem(props) {
  
  const isMobile = useMediaQuery('(min-width:750px)');
  const mobileBackGround = useMediaQuery('(max-width:650px)');


  console.log('ICON LIST: ', props);
  let parsedIconList = props.iconList.map((icon) => {
    return (
      <div className="icon-container">
        <img src={ require(`../images/icons/${icon.image_path_name}-icon.png`) } alt={icon.title} className='icon'/>
      </div>
    );
  });

  // if (props.transitionGroup){
  //   console.log("ITEM ID", props.title)
  //   console.log("PROPS: ", props)
  //   console.log("TRANSITION GROUP", props.transitionGroup)
  // }

  
  return (
    <article className='page' style={{ backgroundImage: "url(" + require(`../images/projects/${ props.imagePath }${ mobileBackGround ? '-mobile': ''}.png`) +")" }}>
      <div className='page shading'>
        <div className='main project'>
          <div className='project-info'>
            <h5>{ props.title }</h5>
            <p>
              { props.description }
            </p>
            <div className='project-links'>
            <h6>Site Links:</h6>
              
            <a href={ props.liveLink } target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={ faGlobe } className='icon' />
            </a>

            <a href={ props.github } target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={ faGithub } className='icon' />
            </a>
              
            </div>
          </div>

          { isMobile && <a href={ props.liveLink } target="_blank" className='image-container'>
            <img src={ require(`../images/projects/${props.imagePath}-mobile.png`) } alt="" />
          </a> }
        </div>
      </div>
    </article>
  );
}