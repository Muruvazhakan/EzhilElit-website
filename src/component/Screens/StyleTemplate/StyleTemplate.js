
import React, { useEffect, useState } from "react";
import './StyleTemplate.css'
import * as animate from 'react-reveal/';
import Button from '../../Button/Button';
import StyleImages from "./StyleImages";

import * as Datas from '../../Datas/Datas';
import { NavItem } from "react-bootstrap";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import CartComponent from "../CartComponent/CartComponent";
const options = [
  'one', 'two', 'three'
];

const StyleTemplate = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const initial = {
    allimgs: [],
    count: props.topLine === "Bridal Makeup" ? 2 : props.topLine === "Hairstyle" ? 5 : 6,
    proc: false,
    shortImg: null,
    displaytype: props.displaytype === "1" ? 1 : 0,
    access_more: false,
    imgcount: 10,
    finalimgcount: 10,
    moreflag: true,
  };
  const [allimg, setAllImg] = useState([]);
  const [state, setstate] = useState(initial);
  let sp = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby','Snooker', 'Tennis'];
  useEffect(() => {
    console.log("[StyleTemplate] imgcount" + props.types.imgcount);

    //  console.log("[StyleTemplate] props"+props.types[0]);
    {
      props.types.types.map(types => (
        console.log("[StyleTemplate]1 imgcount&&" + types.topLine)
      ))
    }
    {/* <div>{props.types}</div> */ }
    imgdisp(props.types.imgcount);
  }, []);

  // useEffect(() => {
  //   // console.log("CarouselContainer");

  //   // console.log(props.imgs);

  //   // calcout();
  //   // if(state.count>=6)
  //   // {
  //   //     imgdisp();
  //   // }

  // }, [state.count]);

  const imgdisp = (prop) => {
    // let icount = props.imgcount;

    // let icount = state.count;
    let icount = prop;
    let iar = [];

    while (icount > 0) {
      console.log("icount" + icount);

      // iar=`${props.types.imgurl}${icount}.jpg`;

      iar.push(`${props.types.imgurl}${icount}.jpg`);
      console.log(iar + "   iar");
      icount--;
      // return(
      // <>
      //     <img className="img-style d-block w-100" src={`${props.imgurl}${icount}.jpg`} />
      // </>)
    }
    // console.log(iar);
    // setstate({
    //     ...state,
    //     allimgs: iar,
    // })
    // console.log("iar.length " + iar.length);
    if (iar.length > 10) {
      const items = iar.slice(0, state.imgcount);
      setAllImg(items);
      // console.log("more[] slice*$$ ")

    }
    else {
      setAllImg(iar);
      // console.log("less[] slice*$$ ")
    }

    setstate({
      ...state,
      shortImg: [...iar],
      finalimgcount: iar.length,
      allimgs: iar
    })
    // console.log(state.shortImg)
    // console.log(state.shortImg + "   shortImg[]&&&")
    // {
    //   state.allimgs.map(imageUrls => {
    //     console.log(imageUrls + "   stateallimg")
    //   })
    // }
  }

  const moreHandler = (props) => {

    setstate({
      ...state,
      moreflag: props
    })
   
  }
  var Data     = ['this', 'example', 'isnt', 'funny'],
            MakeItem = function(X) {
                return <option>{X}</option>;
            };

  return (
    <div>

      {props.types.types.map((props, index) => (

        <div
          className={index % 2 === 0 ? 'home__hero-section lightbg' : 'home__hero-section darkBg'}
        >
          <div className="container">
            <div className="row home__hero-row"
              style={{ display: 'flex', flexDirection: index % 2 === state.displaytype ? 'row-reverse' : 'row' }}
            >
              <animate.Zoom delay={100}>
                <div className='col'>
                  <div className='home__hero-text-wrapper'>
                    <div className='top-line'>{props.topLine}</div>
                    {/* <h1 className={props.lightText ? 'heading' : 'heading dark'}>
                  {props.title}
                </h1> */}
                    <p
                      className={
                        index % 2 !== 0
                          ? 'home__hero-subtitle'
                          : 'home__hero-subtitle dark'
                      }
                    >
                      {props.label}
                    </p>
                    {/* <Button buttonSize='btn--wide' buttonColor='blue' onClick={()=>{setstate({...state, access_more:!state.access_more})}}>
                   View More
                  </Button>
                  {state.access_more ?
                  <div>More
                    </div>
                  :null} */}

                  </div>
                </div>
                <div className='col'>
                  <div className='home__hero-img-wrapper'>
                    <img key={index} src={props.url} className='home__hero-img' />
                  </div>
                </div>
              </animate.Zoom>
            </div>
          </div>
        </div>


      ))}

      <div className="top-line styleTemp-button">Our Gallery</div>

      {state.moreflag ?
        <>
          <StyleImages Images={allimg} shortImg={state.shortImg} />
        </>
        :
        <StyleImages Images={state.allimgs} shortImg={state.shortImg} />
      }
      <div className="styleTemp-button">

        {state.moreflag && state.finalimgcount > 10 ?
          <>

            <Button buttonSize='btn--wide' buttonColor='blue' onClick={() => moreHandler(false)}>
              View More
            </Button>

          </>
          :
          <>

            {state.finalimgcount > 10 ?
              <Button buttonSize='btn--wide' buttonColor='blue' onClick={() => moreHandler(true)}>
                View Less
              </Button> : null}
          </>
        }


      </div>

    

  {/* <select>{Datas.EAProducts.Lens.map(MakeItem)}</select> */}

     {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}

    </div>

  );
};

export default StyleTemplate;