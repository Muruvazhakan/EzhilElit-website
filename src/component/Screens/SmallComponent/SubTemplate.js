import React from 'react';
// import './MainTemplate.css';
import CarouselContainer from '../../CarouselContainer/CarouselContainer';

const SubTemplate = ({
  lightBg,
  topLine,
  //   lightText,
  //   lightTextDesc,
  //   headline,
  //   description,
  //   buttonLabel,
  img,
  imgs,
  imgcount,
  imgurl,
  autoplay,
  //   alt,
  //   imgStart
}) => {


  return (
    <>
      <div
        // className={lightBg ? 'home__hero-section lightbg' : 'home__hero-section darkBg'}
      >
        <div 
        className='home__hero-text-wrapper top-line'
        >{topLine}</div>

        <div
          // className='home__hero-img-wrapper'
        >         
          <CarouselContainer imgs={imgs} imgcount={imgcount} imgurl={imgurl} topLine={topLine} autoplay={autoplay} screenname={"SubTemp"}/>
        </div>
      </div>
    </>
  )
}

export default SubTemplate
