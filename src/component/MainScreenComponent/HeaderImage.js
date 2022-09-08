import React from 'react';
// import styled from 'styled-components';
// import Background from 'https://storage.googleapis.com/helpone-9bf33.appspot.com/User_Proof/1234567890.png';
// import NavigationBar from '../Navigation/NavigationBar';
// import Background from '../../assest/jr1.png';
// import { RiMenuUnfoldFill,RiMenuFoldFill } from "react-icons/ri";
// import { Button } from '../Button/Button'; 
// import ContactUS from '../PopUpForm/ContactUS';
// import * as animate from 'react-reveal/';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Zoom,Autoplay } from 'swiper';
import * as Datas from '../Datas/Datas';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HeaderImage.css'

import { ImHackernews } from 'react-icons/im';

//   const Section = styled.section`
//   background: #1c2237;
//   background-image: url(${Background});
//    height: 650px;
//   // display: block;
//   background-repeat: no-repeat;
//   background-size: cover;
//   @media screen and (max-width:650px){
//     height: 350px;
//   }
// `;

SwiperCore.use([Zoom, Navigation, Pagination, Scrollbar, A11y, EffectFade,Autoplay]);

// let allimg=[
//   { src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/CupBoard/1.png'},
//   { src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/CupBoard/2.png'},
//   { src: 'https://storage.googleapis.com/helpone-9bf33.appspot.com/CupBoard/3.png'}
// ]


// const Content = styled.div`
//   width: 100%;
//   // height: 100px;
// `;

// const Left = styled.div`
// align-items: center;
//    padding-left: 230px;
//    padding-top: 180px;
//    justify-content: center;
// `;

// const Title = styled.p`
//   font-size: 55px;
//   color: #373737;
//   font-weight: 800;
//   border-radius: 3;
//   border-color: blueviolet;
// `;

// const Desc = styled.p`
//   width: 472px;
//   font-size: 20px;
//   color: #9ea0ac;
//   line-height: 30px;
//   margin-top: 58px;
// `;



const HeaderImage = () => {
  return (
    <>
      {/* <Section> */}

      {/* <NavigationBar/>  */}
      {/* <div className="container"> */}
      {/* <animate.LightSpeed left delay={2000}>
          <div className="Title">
          <h4>Interior Designer and Decorator in Chennai</h4>
          </div>   
          </animate.LightSpeed>          */}
      {/* <div className="buttonstyle"> 
          < a className="buttona" href="#">
            {/* Get Quotes  */}
      {/* <ContactUS/> */}
      {/* </a>  */}
      {/* <div className="butticon">
          <RiMenuUnfoldFill  size="1.2em"/>
          </div> */}
      {/* </div>   */}
      {/* <Button buttonStyle='btn--primary'
                      buttonSize='btn--large'
                      buttonColor='primary'
                     >
                        Get
                      </Button> */}
      {/* </div>
                 </Section> */}

      {/* <Swiper
        effect="cube"
        spaceBetween={10}
        zoom={true}
        onZoomChange
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        EffectFade
        Zoom
        // scrollbar={{ draggable: true,dragSize:50 }}
        //   onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      // effect={props.screenname === "SubTemp"?"cube":"" }

      >



        {Datas.HeaderImagUrl.map(imageUrls => (

          <SwiperSlide key={imageUrls}>

            <img
              className={
                "header-images"
                // "sub-img-cont img-style d-block w-100 "
                // "img-style d-block w-100"
              }
              alt="Slide Images"
              src={`${imageUrls.imageUrls}`} />
            {/* <img className="img-style d-block w-100" src={`${props.imgurl}1.jpg`} />  */}

          {/* </SwiperSlide>

        ))}

      </Swiper>  */}

        <img
        className={
          "header-images"
          // "sub-img-cont img-style d-block w-100 "
          // "img-style d-block w-100"
        }
        alt="Slide Images"
         src={Datas.HeaderImagUrl[2].imageUrls} /> 
    </>
  )
}

export default HeaderImage;