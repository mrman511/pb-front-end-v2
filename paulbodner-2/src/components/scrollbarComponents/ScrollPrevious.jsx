import React from "react";



export default function ScrollPrevious({ setScroll }){

  setTimeout(() => { setScroll("CURRENT") }, 500);

  return (
    <div className="scrollbar" id="previous-scroll">
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