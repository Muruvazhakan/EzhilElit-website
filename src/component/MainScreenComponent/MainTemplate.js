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

  // const fet =async ()=>{
  //   const server_Url='http://13.232.180.192/JRModEnt/';
  //   const Modularkitchen_Url =`${server_Url}Image/Image_Retrive.php`;
  //   const aws='https://storage.googleapis.com/helpone-9bf33.appspot.com/jrmodularenterprises/ModularKitchen/ModularKitchenImage.txt';
  //   const response = await fetch(Modularkitchen_Url);
  //   const data =  response.json();
  //   // console.log("response php");
  //   // console.log(response);
  //   // console.log(data);

  //   fetch(Modularkitchen_Url,
  //      {
  //     // mode: 'no-cors',
  //     // method: 'post',
  //     header: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json',
  //     },      
  //   }
  //   ).then(res => res.json()).then(res => {
  //     console.log("jsonasdasd");
  //     console.log(res);   

  //     // if (res == "No") {
  //     //   console.log("No");           

  //     // }
  //     // else {       
  //     //   console.log("else");
  //     //   console.log(res);        

  //     // }

  //   })
  //     .catch((error) => {
  //       console.error(error);
  //     });
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

    Display_No_Result: props.screen === 'SubScreen' ? props.Sub_Display_No % 2 : props.Display_No % 2,
    titleimage: props.screen === 'SelectedSubScreen' ? `${Datas.Img_Server}${props.Sub_TitleImage}`: `${Datas.Img_Server}${props.titleimage}`,
    
    // Modularkitchen:false,

  };
  const [state, setState] = useState(initialval);
  useEffect(() => {
    imgs_present();
    // console.log("props MainTemplate");
    // console.log(props);
    // console.log(props.screen);
    // console.log(state.titlesubimage);
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
                  <div className='top-line'>{props.screen === 'SelectedSubScreen' ? props.Sub_Alt : props.alt}</div>
                  <h1 className={state.Display_No_Result === 0 ? 'heading' : 'heading dark'}>
                    {props.screen === 'SelectedSubScreen' ? props.Sub_Title : props.title}
                  </h1>
                  <p
                    className={
                      state.Display_No_Result === 0
                        ? 'home__hero-subtitle'
                        : 'home__hero-subtitle dark'
                    }
                  >
                    {props.screen === 'SelectedSubScreen' ? props.Sub_Lable : props.label}
                  </p>
                  {props.screen !== 'SelectedSubScreen' ?
                    <Link to={props.screen === 'SubScreen' ? {
                      pathname: `/screen=${props.screenname}&sub=${props.topLine}`,
                      selectedtitle: props.alt,
                      selectedtheadercomponent: props,
                      screen: 'home'
                    }
                      : {
                        pathname: `/screen=${props.topLine}`,
                        selectedtitle: props.alt,
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
