import React from "react";
import { CSSTransition } from "react-transition-group";



export default function Scrollbar({ changeProject, toggleScroll }){

  return (
    <div className="scrollbar">
      <b className='scroll-item__hidden--left'></b>
      <b className='scroll-item__outside--left'></b>
      <b className='scroll-item__inside--right'></b>
      <b className='scroll-item__middle'></b>
      <b className='scroll-item__inside--left'></b>
      <b className='scroll-item__outside--right'></b>
      <b className='scroll-item__hidden--right'></b>
    </div>
  );
}