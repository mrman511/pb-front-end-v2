import React from "react";
import { useMediaQuery } from "@mui/material";


export default function ProjectItem(props) {
  const isMobile = useMediaQuery('(min-width:750px)');
  const mobileBackGround = useMediaQuery('(max-width:650px)');

  let parsedIconList = props.iconList.map((icon) => {
    return (
      <div className="icon-container">
        <img src={ require(`../images/${icon}-icon.png`) } alt={icon} className='icon'/>
      </div>
    );
  });

  
  return (
    <article className='page' style={{ backgroundImage: "url(" + require(`../images/${ props.imagePath }${ mobileBackGround ? '-mobile': ''}.png`) +")" }}>
      <div className='page shading'>
        <div className='main project'>
          <div className='info-section'>
            <h5>{ props.title }</h5>
            <p>
              { props.description }
            </p>
            <h6>Created Using</h6>
            <div className='project-icons'>
              { parsedIconList }
            </div>
          </div>

          { isMobile && <div className='image-container'>
            <img src={ require(`../images/${props.imagePath}-mobile.png`) } alt="" />
          </div> }
        </div>
      </div>
    </article>
  );
}