import React, { useEffect } from 'react';
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
const imgs_present = () =>{
  // console.log("imageUrl");
  // console.log("imgcount imgurl" + imgcount+imgurl);  
  // fet();
  // const response1 =  fetch(aws);
  // console.log("response1");
  // console.log(response1);
}
  useEffect(() => {
    imgs_present();
    // console.log(" imgscr/");
    // console.log(label+"label &&&" );

    // console.log(imgs+" ssimgscr/");
  }, [])  

  return (
    <>
     
      <div
        className={props.lightBg ? 'home__hero-section lightbg' : 'home__hero-section darkBg'}
      >
        <div className="container">
        <div className="row home__hero-row"
        style={{display:'flex',flexDirection:props.imgStart ==="start" ? 'row-reverse' :'row'}}
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
                <div className='top-line'>{props.topLine}</div>
                <h1 className={props.lightText ? 'heading' : 'heading dark'}>
                  {props.title}
                </h1>
                <p
                  className={
                    props.lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {props.label}
                </p>
                <Link to={props.url}>

                  {props.screenname !=="Special" ? 
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {props.buttonLabel}
                  </Button>
                  :null}
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
              <img src={props.titleimage}  className='home__hero-img' />
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
