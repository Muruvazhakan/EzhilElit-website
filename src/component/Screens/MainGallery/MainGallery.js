import React, { useEffect, useState }  from 'react';
import './MainGallery.css';
import * as Datas from '../../Datas/Datas';
import StyleTemplate from '../StyleTemplate/StyleTemplate';
import StyleImages from '../StyleTemplate/StyleImages';
import Button from '../../Button/Button';
const MainGallery = (props) => {

  const initial = {
    allimgs: [],   
    proc: false,
    shortImg:null,
    displaytype:props.displaytype==="1"? 1 :0,
    moreflag:true,
    imgcount: 10,
};
const [allimg, setAllImg] = useState([]);
const [state, setstate] = useState(initial);

    useEffect(() => {
        // console.log("[StyleTemplate] imgcount"+props.types.imgcount);
     
       //  console.log("[StyleTemplate] props"+props.types[0]);
      
         {/* <div>{props.types}</div> */}
         imgdisp(Datas.MainScreen.imgcount);
       }, []);
     
     
       const imgdisp = (prop) => {
         // let icount = props.imgcount;
     
         // let icount = state.count;
         let icount = prop;
         let iar = [];
         
         while (icount > 0) {
             console.log("[MainGallery]icount"+icount);
     
             // iar=`${props.types.imgurl}${icount}.jpg`;
     
             iar.push(`${Datas.MainScreen.imgurl}${icount}.jpg`);
             console.log(iar + "   iar");
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
          allimgs:iar,
          shortImg:[...iar]
        })
       
     }
     const moreHandler = (props) => {
  
      setstate({
        ...state,
        moreflag: props
      })
  
    }
     
    return (
        <>       
         
         {/* <StyleTemplate types={Datas.MainScreen} displaytype="3"/>    */}         
      
         <div className="top-line styleTemp-button">Our Gallery</div>      
     
         {state.moreflag ?
          <>
           <StyleImages Images={allimg} shortImg={state.shortImg} />          
          </>
          :
          <StyleImages Images={state.allimgs} shortImg={state.shortImg} />
        }
      <div className="styleTemp-button">

        {state.moreflag ?         
         
            <Button buttonSize='btn--wide' buttonColor='blue' onClick={() => moreHandler(false)}>
              View More
            </Button>          
        
          :
        
          <Button buttonSize='btn--wide' buttonColor='blue' onClick={() => moreHandler(true)}>
          View Less
        </Button>
        
        }
        {/* {Datas.EAProducts.map} */}
        </div>
         
        </>
    )
}

export default MainGallery