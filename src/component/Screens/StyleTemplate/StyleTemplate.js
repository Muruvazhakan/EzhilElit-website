
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
    count: '3',
    proc: false,
    shortImg: null,
    details: props.details,
    access_more: false,
    imgcount: 10,
    finalimgcount: 10,
    moreflag: true,
    imgurl: '',
    nondisp: '',
    detailsaval: false
  };
  const [allimg, setAllImg] = useState([]);
  const [state, setstate] = useState(initial);
  
  useEffect(() => {
    console.log("[StyleTemplate] imgcount StyleTemplate2 ");
    console.log(props.details);
    {/* <div>{props.types}</div> */ }
    if (props.details === 'No') {
      // console.log(props);
      setstate({
        ...state,
        detailsaval: false,
      })
    }
    else if (props.details.length <0 || props.details ){
      imgdisp(props.details);
    }
  }, [props.details]);

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
    let noniar = [];
    let imgurl;
    console.log("props lenght " + prop.length);
    {
      prop.map(x => {
        console.log("  props val stateallimg")
        console.log(x)
        console.log(`${Datas.Img_Server}/${x.topLine}/${x.imgcount}.jpg`)
        if (x.user_display === '1') 
          {
          for(var i=1;i<x.imgcount;i++)
          {
            iar.push(`${Datas.Img_Server}/${x.topLine}/${i}.jpg`);
          }
        
        }
        else {
          console.log(" non dis props val stateallimg ")
          noniar.push(`${Datas.Img_Server}/${x.topLine}/${x.imgcount}.jpg`);
        };
        console.log("iar");
        console.log(iar);
        imgurl = `${x.topLine}`;
      });

    }
    // console.log(iar);
    // setstate({
    //     ...state,
    //     allimgs: iar,
    // })
    // console.log("iar.length " + iar.length);
    // if (prop.length > 5) {
    //   const items = iar.slice(0,prop.length/2 );
    //   setAllImg(items);
    //   // console.log("more[] slice*$$ ")

    // }
    // else {
    //   setAllImg(iar);
    //   // console.log("less[] slice*$$ ")
    // }
    setAllImg(iar);
    setstate({
      ...state,
      shortImg: [...iar],
      finalimgcount: iar.length,
      allimgs: iar,
      imgurl: imgurl,
      nondisp: noniar,
      detailsaval: true,
    })
    // console.log(state.shortImg)
    // console.log(state.shortImg + "   shortImg[]&&&")
    // {
    //   state.allimgs.map(imageUrls => {
    //     console.log(imageUrls + "   stateallimg")
    //   })
    // }
  }

  var Data = ['this', 'example', 'isnt', 'funny'],
    MakeItem = function (X) {
      return <option>{X}</option>;
    };

  return (
    <>

      {state.detailsaval ?
        <>
        {props.screen === 'Main' ? <div className="top-line styleTemp-button">Latest Updates</div> : 
          <div className="top-line styleTemp-button">Our Gallery</div>
        }
        

          {/* {state.moreflag ?
        <>
          <StyleImages Images={allimg} shortImg={state.shortImg} imglength={allimg.length}/>
        </>
        :
        <StyleImages Images={state.allimgs} shortImg={state.shortImg} imglength={allimg.length} />
      } */}
          {state.allimgs.length > 0 ?
            <StyleImages Images={state.allimgs} imglength={state.allimgs.length} headerid={props.details[0].Header_Details_id} subheaderid={props.details[0].Image_Sub_Header_Id}
              screen={props.screen} imgurl={state.imgurl} useredits={props.useredits}
            />
            : <h2 className=" styleTemp-button">All Images are Hidden</h2>}
          :


          {props.useredits == '66656d6364' ?
            <>
              {state.nondisp.length > 0 ?
                <>
                  <div className="top-line styleTemp-button">Hidden Images</div>

                  <StyleImages Images={state.nondisp} imglength={state.allimgs.length} headerid={props.details[0].Header_Details_id} subheaderid={props.details[0].Image_Sub_Header_Id}
                    screen={props.screen} imgurl={state.imgurl} useredits={props.useredits} view={'Hidden'} details={props.details}
                  />
                </>
                : null
              }

            </>
            : null}
        </>
        : <div className="top-line styleTemp-button">No Image</div>}
      {/* <select>{Datas.EAProducts.Lens.map(MakeItem)}</select> */}

      {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
    </>

  );
};

export default StyleTemplate;