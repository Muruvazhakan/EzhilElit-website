import React from 'react';
import CarouselContainer from '../../CarouselContainer/CarouselContainer';
import './OurWork.css';
const OurWorkTemp = ({
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
          <CarouselContainer imgs={imgs} imgcount={imgcount} imgurl={imgurl} topLine={topLine} autoplay={autoplay} screenname={"other"}/>
        </>
    )
}

export default OurWorkTemp