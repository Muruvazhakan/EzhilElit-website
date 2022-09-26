
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
    console.log("[StyleTemplate] imgcount StyleTemplate");

     console.log(props.types);
    // {
    //   props.types.types.map(types => (
    //     console.log("[StyleTemplate]1 imgcount&&" + types.topLine)
    //   ))
    // }
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