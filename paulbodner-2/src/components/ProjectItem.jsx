import React from "react";
import Background from '../images/devsearch.png'
import Devsearch from '../images/devsearch-mobile.png'


export default function ProjectItem(props) {

  let parsedIconList = props.iconList.map((icon) => {
    return (
      <div className="icon-container">
        <img src={ require(`../images/${icon}-icon.png`) } alt={icon} className='icon'/>
      </div>
    );
  });

  
  return (
    <article className='page' style={{ backgroundImage: "url("+ require(`../images/${props.imagePath}.png`) +")" }}>
      <div className='page shading'>
        <div className='main project'>
          <div className='project-info'>
            <h5>{ props.title }</h5>
            <p>
              { props.description }
            </p>
            <h6>Created Using</h6>
            <div className='project-icons'>
              { parsedIconList }
            </div>
          </div>

          <div className='image-container'>
            <img src={ require(`../images/${props.imagePath}-mobile.png`) } alt="" />
          </div>
        </div>
      </div>
    </article>
  );
}