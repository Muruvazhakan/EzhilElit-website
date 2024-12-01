import React, { useEffect, useState } from 'react';
import './MainGallery.css';
import * as Datas from '../../Datas/Datas';
import StyleTemplate from '../StyleTemplate/StyleTemplate';
import StyleImages from '../StyleTemplate/StyleImages';
import Button from '../../Button/Button';
import { useLocation } from "react-router-dom";
const MainGallery = (props) => {

  const initial = {
    allimgs: [],
    proc: false,
    shortImg: null,
    displaytype: props.displaytype === "1" ? 1 : 0,
    moreflag: true,
    imgcount: 10,
    selectedtheadercomponent:''
  };
  const [allimg, setAllImg] = useState([]);
  const [state, setstate] = useState(initial);
  const location = useLocation();
  useEffect(() => {
    // console.log("[StyleTemplate] imgcount"+props.types.imgcount);

    //  console.log("[StyleTemplate] props"+props.types[0]);

    {/* <div>{props.types}</div> */ }
    imgdisp(Datas.MainScreen.imgcount);
    let last = location.pathname.substring(location.pathname.lastIndexOf("=") + 1, location.pathname.length);
    // console.log(' location.selectedtitle ' + last);
    if (last) {
      // window.location.href = '/';
      // fetchdetails(last);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    // fetchdetails('all');
  }, []);

  const fetchdetails = (last) => {
    // console.log("fetchdetails from SelectedHeader" + last);

    fetch(Datas.Image_Count,
      {
        // mode: 'no-cors',
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }, body: JSON.stringify({
          // we will pass our input data to server
          headername: last,
          request: 'latest'
        })
      }
    ).then(res => res.json()).then(res => {
      console.log("Main Gallery");
      console.log(res);
      // console.log(res.length +  ' res.length ');
      let datas = true;
      if (res === 'No Data') {

        datas = false;
      }

      setstate({
        ...state,
        selectedtheadercomponent: res,
        selectedtitle: last,
        load: true,
        data: datas
      })
      //   console.log('state.user_display' + state.user_display);
    }).catch((error) => {
      console.error(error);
    })
    // fetchimagedetails();

  }
  const imgdisp = (prop) => {
    // let icount = props.imgcount;

    // let icount = state.count;
    let icount = prop;
    let iar = [];

    while (icount > 0) {
      //  console.log("[MainGallery]icount"+icount);

      // iar=`${props.types.imgurl}${icount}.jpg`;

      iar.push(`${Datas.Img_Server}${icount}.jpg`);
      //  console.log(iar + "   iar");
      icount--;
      // return(
      // <>
      //     <img className="img-style d-block w-100" src={`${props.imgurl}${icount}.jpg`} />
      // </>)
    }
    const items = iar.slice(0, state.imgcount);
    setAllImg(items);
    setstate({
      ...state,
      allimgs: iar,
      shortImg: [...iar]
    })

  }

  return (
    <>

      {/* <StyleTemplate types={Datas.MainScreen} displaytype="3"/>    */}

      

      {/* <StyleImages Images={allimg} imglength={allimg.length} screen={'Main'}
      
      /> */}
      {state.load  ?
        <StyleTemplate details={state.selectedtheadercomponent} screen='Main' useredits={'false'}  />
        : null}
    </>
  )
}

export default MainGallery