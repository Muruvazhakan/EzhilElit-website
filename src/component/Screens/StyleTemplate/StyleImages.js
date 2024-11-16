import React, { useEffect, useState } from 'react';
// import './CarouselContainer.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import * as Datas from '../../Datas/Datas';
import ImgsViewer from "react-images-viewer";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as animate from 'react-reveal/';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import "swiper/components/zoom/zoom.min.css"
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import RubberBand from 'react-reveal/RubberBand';
import ImageViewer from 'react-simple-image-viewer';
import Button from '../../Button/Button';
import './StyleImages.css';
import Spinner from '../../Spinner/Spinner';
import ImageComponent from '../../ImageComponent/ImageComponent';
SwiperCore.use([Zoom, Navigation, Pagination, Scrollbar, A11y, EffectFade]);
const StyleImages = (props) => {
    const initial = {
        allimgs: [],
        count: props.topLine === "Netlon" ? 2 : props.topLine === "False Ceiling" ? 5 : 6,
        proc: false,
        currImg: 0,
        isOpen: false,
        src: 0,
        moreflag: true,
        disval: props.imglength > 0 ?props.imglength / 2:null ,
        totallength: props.imglength,
        headerid: props.headerid,
        subheaderid: props.subheaderid,
        load:false,
        change:false,
        // onClickPrev={this.gotoPrevious}
        // onClickNext={this.gotoNext}
        // onClose
    };
    let imgslist = [...props.Images];
    const [state, setstate] = useState(initial);
    const [allimg, setAllImg] = useState([]);
    const moreHandler = (prop) => {
        let disval = '';
        console.log(props + ' :props moreHandler val: ' +disval);
        console.log(props);
        if (prop) {
            disval = props.imglength / 2;
        }
        else {
            disval = props.imglength;
        }
        setstate({
            ...state,
            moreflag: prop,
            disval: disval
        })

    }
    useEffect(() => {
        // console.log("CarouselContainer imgdisp@@@@");
        // console.log(props + "label &&&");
        // console.log('props.imgurl ' + props.imgurl);
        // console.log(props);
        // console.log("window.innerWidth < 720 &&&" + window.innerWidth);
        // console.log("imgslist " + window.innerWidth);
        // console.log(imgslist);
        // console.log(props.disval+ ' props.disval2 ' + props.imglength);
        if (props.imglength > 0) {
            setstate({
                ...state,
                disval: props.imglength / 2,
            });
        }
        // console.log(state.disval + "disval " +props.imglength/2);
        // console.log(state.disval + ' val');
        // if(props.imgcount<=state.count)
        // {
        //     imgdisp();
        // }
        setTimeout(() => {
            setstate({
                ...state,                
                load: true
            });
        }, 2000);
    }, [props.imglength]);



    const onSelectImgHandler = (index, src) => {
        // console.log("index [onSelectImgHandler]" + index);
        setstate({
            ...state,
            currImg: index,
            isOpen: !state.isOpen,
            src: src,
        })
    }
    const updateHandler = (type, imgurl) => {
        // console.log(imgurl);
        // console.log("iupdateHandler " + type + ' ' + imgurl);
        let imgnodesc = imgurl.substring(imgurl.lastIndexOf("/") + 1, imgurl.length)
        // console.log(imgnodesc);
        let imgno = imgnodesc.split('.')
        // console.log(imgno[0]);
        // let imgno=imgnodesc.
        let finalname = `${props.imgurl}${imgnodesc}`;
        // console.log(finalname);
        // console.log("headerid  " + state.headerid + state.subheaderid);        
        setstate({
            ...state,
            load:false,
        })
        updateImage(type,finalname,imgno[0])
    }
    const changeImageHandler = () =>{
        //  console.log("changeImageHandler  "+state.change);
        //  console.log(props);
        //  console.log(state);
        setstate({
            ...state,
            change:!state.change,
        })
    }

    const updateImage = (type, imgurlname, imgno) => {
        // console.log("updateImage  ");
        let dispval='';
        if(type ==='Show')
        {
            dispval='1';
            type='Hide';
        }
        else{
            dispval='0';           
        }
        // console.log(dispval + ' disp val ' + type +imgno);
        fetch(Datas.Image_Count,
            {
                // mode: 'no-cors',
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                }, body: JSON.stringify({
                    // we will pass our input data to server                    
                    request: 'update',
                    headerid: state.headerid,
                    subheaderid: state.subheaderid,
                    type: type,
                    imgurl: imgurlname,
                    imgno: imgno,
                    dispval:dispval
                })
            }
        ).then(res => res.json()).then(res => {
            // console.log("res SelectedHeader");
            // console.log(res);
            if(res ==='Issue in Update' || res ==='Issue' )
            {
                alert(res);
            }
            else{
                alert(res);
                window.location.reload(false);
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }
            setstate({
                ...state,                
                load: true,
            })
            //   console.log('state.user_display' + state.user_display);
        }).catch((error) => {
            console.error(error);
        })
        // fetchimagedetails();

    }
    // const HandleNavi = (props) => {
    //     console.log("props [HandleNavi]" + props);
    //     if (props === 1) {
    //         setstate({
    //             ...state,
    //             currImg: state.currImg + 1,
    //         })
    //     }
    //     else {
    //         setstate({
    //             ...state,
    //             currImg: state.currImg - 1,
    //         })
    //     }
    // }

    if (!state.load) {
        return <Spinner />
    }
    return (
        <RubberBand delay={2000}>
            <div
                // className={props.screenname === "SubTemp" ? "img-container sub-container" : "img-container"}
                className="hole-img"
            >
                {/* {Datas.HeaderImagUrl.map()

                } */}

                {/* {Datas.HeaderImagUrl.map(({imageUrls},index)=>{
                    console.log(imageUrls+"[Styles123] map index "+ index);
                    
                    // <img src={`${i.imageUrls}`}  
                    // // {i.src}
                    
                    // key={index} 
                     
                    //  />

                    <img
              className={
                "header-images"
                // "sub-img-cont img-style d-block w-100 "
                // "img-style d-block w-100"
              }
              alt="Slide Images"
              src={`${imageUrls}`} />

                     
                })}   */}

                {/* {props.Images.map(({ id, src, title, description }, index) =>

                    <>
                        <img key={id}
                        className="Data-all"
                            src={src}
                            title={title} alt={description}
                            onClick={() => { onSelectImgHandler(index, src) }}
                        />


                    </>
                )} */}
                <div className="full-img-container">
                    {props.Images.slice(0, state.disval).map((imageUrls, index) => (
                        <>
                            <animate.LightSpeed left delay={1500}>
                                <div>
                                    <img key={index}
                                        onClick={() => { onSelectImgHandler(index, `${imageUrls}`) }}
                                        // className={props.screenname === "SubTemp" ?
                                        //     "sub-img-cont img-style d-block w-100 "
                                        //     : "img-style d-block w-100"}
                                        alt="Slide Images"
                                        className="Data-all"
                                        src={`${imageUrls}`} />
                                    {
                                        props.screen === "SelectedDetails" && props.useredits === '66656d6364' ?
                                            <div class='update-button-style'>
                                                <div>
                                                    {props.view === 'Hidden' ? 
                                                     <Button buttonSize='btn--small' buttonColor='blue' onClick={() => updateHandler('Show', imageUrls)}>Show Image</Button>
                                                     :
                                                     <Button buttonSize='btn--small' buttonColor='blue' onClick={() => updateHandler('Hide', imageUrls)}>Hide Image</Button>
                                                    }
                                               
                                                    <Button buttonStyle='btn--primary' buttonSize='btn--small' buttonColor='blue' onClick={() => updateHandler('Header', imageUrls)}>Set Header Image</Button>
                                                  
                                                </div>
                                              <div>
                                                <Button buttonSize='btn--small' buttonColor='blue' onClick={() => updateHandler('SubHeader', imageUrls)}>Set Sub Header Image</Button>
                                                <Button buttonSize='btn--small' buttonColor='blue' onClick={() => changeImageHandler('SubHeader', imageUrls)}>Change</Button>
                                                </div>
                                            </div>
                                            : null}
                                </div>
                            </animate.LightSpeed>


                            {/* {state.isOpen && (
                            <ImageViewer
                                src={IMG_SETs}
                                currentIndex={index}
                                disableScroll={false}
                                closeOnClickOutside={true}
                                onClose={() => {
                                    setstate({ ...state, isOpen: !state.isOpen })
                                }}
                            />
                        )} */}

                        </>

                    ))}
                </div>
                <div className="ImageViewer-big">
                    
                    {state.isOpen && window.innerWidth > 500 && (
                        <ImageViewer
                            src={props.Images}
                            currentIndex={state.currImg}
                            disableScroll={true}
                            closeOnClickOutside={true}
                            onClose={() => {
                                setstate({ ...state, isOpen: !state.isOpen })
                            }}
                        />
                    )}
                </div>
                <div className="styleTemp-button">


                    {state.moreflag ?
                        <>

                            <Button buttonSize='btn--wide' buttonColor='blue' onClick={() => moreHandler(false)}>
                                View More
                            </Button>

                        </>
                        :
                        <>
                            <Button buttonSize='btn--wide' buttonColor='blue' onClick={() => moreHandler(true)}>
                                View Less
                            </Button>
                        </>
                    }
                   
                </div>
                <div>
                     {props.useredits === '66656d6364' && props.details && state.change?
                    <ImageComponent screen={'modify'} 
                    data={props.details} topline={props.details.topLine} headerid={props.details.Header_Details_id}
                   
                    />
                    :null}
                    </div>
            </div>
        </RubberBand>
    )
}

export default StyleImages;