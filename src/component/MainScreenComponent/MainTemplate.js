import React, { useEffect, useState } from 'react';
import './MainTemplate.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
//import logo from '../../assest/Images/1.jpeg';
// import 
import * as animate from 'react-reveal/';
import * as Datas from '../Datas/Datas'
// const express = require("express")
// const app = express()
// const cors = require("cors")

// app.use(cors())
const MainTemplate = (props) => {

  // async function imageLoader() {
  //   console.log("imageLoader");
  //   // const request = await fetch('https://storage.googleapis.com/helpone-9bf33.appspot.com/User_Proof/imagefile.txt');
  //   // const response = await request.json();

  //   fetch('https://storage.googleapis.com/helpone-9bf33.appspot.com/imgsrc4.txt', {
  //     mode: 'no-cors'
  //   })
  //     // .then(response => response.json())
  //     .then(res => res.text())
  //     .then(data => {
  //       console.log("datass");
  //       console.log(data);
  //     }).catch(er => {
  //       console.log("error" + er);
  //     }

  //     );
  //   // console.log(request+" request/@");
  //   // {request.map((item, index) => {
  //   //     console.log(item+" item/@");
  //   // })}
  //   // return request
  // }

  
  const imgs_present = () => {
    // console.log("imageUrl");
    // console.log("imgcount imgurl" + imgcount+imgurl);  
    // fet();
    // const response1 =  fetch(aws);
    // console.log("response1");
    // console.log(response1);
  }
  const initialval = {
    fromParentScreen: (props.screen === 'SelectedSubScreen' ||props.screen === 'SubScreen' ) ? true:false,
    Display_No_Result:  (props.screen === 'SelectedSubScreen' ||props.screen === 'SubScreen' )  ? props.Sub_Display_No % 2 : props.Display_No % 2,
    titleimage: (props.screen === 'SelectedSubScreen' ||props.screen === 'SubScreen' ) ? `${Datas.Img_Server}${props.Sub_TitleImage}`: `${Datas.Img_Server}${props.titleimage}`,
    
    // Modularkitchen:false,

  };
  const [state, setState] = useState(initialval);
  useEffect(() => {
    imgs_present();
    // console.log("props MainTemplate 123");
    // console.log(props);
    // console.log(props.screen);
    // console.log(state.titleimage );
    // console.log(state.titleimage + ": state.titleimage");
  }, [state.titleimage])


  return (
    <>
     
      <div
        className={state.Display_No_Result === 1 ? 'home__hero-section lightbg' : 'home__hero-section darkBg'}
      >
        <div className="container">
          <div className="row home__hero-row"
            style={{ display: 'flex', flexDirection: state.Display_No_Result === 0 ? 'row-reverse' : 'row' }}
          >
            {/* {imgs.map(imageUrl => renderImage(imageUrl))} */}
            {/* {imgs.map((i,index)=>{
                    console.log(i.src+" map index "+ index);
                    
                    // <img src={i.src} 
                    // // {i.src}
                    
                    // key={index}  className='home__hero-img' />
                })}                 */}



            {/* <img src={logo}  className='home__hero-img' /> */}

            {/* <CarouselContainer imgs={props.imgs} lightBg={props.lightBg} title={props.title}imgcount={props.imgcount} imgurl={props.imgurl} label={props.label} topLine={props.topLine} autoplay={props.autoplay} /> */}
            {/* <CarouselContainer props={props} /> */}
            <animate.Zoom delay={200}>
              <div className='col'>
                <div className='home__hero-text-wrapper'>
                  {/* <div className='top-line'>{props.screen === 'SelectedSubScreen' ? props.Sub_Alt : props.alt}</div> */} 
                  <div className='top-line'>{ state.fromParentScreen ? props.topLine : props.alt}</div> 
                  <h1 className={state.Display_No_Result === 0 ? 'heading' : 'heading dark'}>
                    {state.fromParentScreen  ? null : props.title}
                  </h1>
                  <p
                    className={
                      state.Display_No_Result === 0
                        ? 'home__hero-subtitle'
                        : 'home__hero-subtitle dark'
                    }
                  >
                    {state.fromParentScreen  ? props.subLable : props.label}
                  </p>
                  {props.screen !== 'SelectedSubScreen' ?
                    <Link to={props.screen === 'SubScreen' ? {
                      pathname: `/screen=${props.screenname}&sub=${props.subscreenname}`,
                      // pathname: `/screen=${props.screenname}`,
                      selectedtitle: props.alt,
                      selectedtheadercomponent: props,
                      screen: 'home'
                    }
                      : {
                        pathname: `/screen=${props.screenname}`,
                        selectedtitle: props.screenname,
                        selectedtheadercomponent: props,
                        screen: 'home'
                      }}>

                      {props.screenname !== "Special" ?
                        <Button buttonSize='btn--wide' buttonColor='blue' >
                          View More
                        </Button>
                        : null}
                    </Link>
                    : null}
                </div>
              </div>
              <div className='col'>
                <div className='home__hero-img-wrapper'>
                  <img src={state.titleimage} className='home__hero-img' />
                </div>
              </div>
            </animate.Zoom>
          </div>
        </div>
      </div>

    </>
  )
}

export default MainTemplate
