import React, { useEffect, useState } from 'react';
import './CarouselContainer.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import * as Datas from '../Datas/Datas';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade,Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
SwiperCore.use([Zoom,Navigation, Pagination, Scrollbar, A11y, EffectFade]);
const CarouselContainer = (props) => {
    const initial = {
        allimgs: [],
        count: props.topLine === "Netlon" ? 2 : props.topLine === "False Ceiling" ? 5 : 6,
        proc: false
    };
    const [state, setstate] = useState(initial);
    const [allimg, setAllImg] = useState([]);
    useEffect(() => {
        console.log("CarouselContainer");

        // console.log(props.imgs);
        // imgdisp();
        calcout();
        // if(state.count>=6)
        // {
        //     imgdisp();
        // }

    }, [state.count]);
    useEffect(() => {
        console.log("CarouselContainer imgdisp@@@@");
        console.log(props + "label &&&");
        console.log(props);
        console.log("window.innerWidth < 720 &&&" + window.innerWidth);
        // if(props.imgcount<=state.count)
        // {
        //     imgdisp();
        // }

    }, [state.count]);

    const calcout = () => {
        let proc = "1";
        let con = 5;
        fetch(Datas.Modularkitchen_Url,
            {
                // mode: 'no-cors',
                // method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
            }
        ).then(res => res.json()).then(res => {
            console.log("jsonasdasd");
            proc = "0";
            console.log(res);
            // console.log(res[0].Modularkitchen);
            // console.log(res[0].CupBoard);
            // console.log(res[0].FalseCeiling);
            // console.log(res[0].PvcDoor);
            setstate({
                ...state,
                proc: true,
            });
            if (props.topLine === "PvcDoor") {
                setstate({
                    ...state,
                    count: res[0].PvcDoor
                });
                con = res[0].PvcDoor;
                console.log("PvcDoor insisde");
            }
            if (props.topLine === "Netlon") {
                setstate({
                    ...state,
                    count: res[0].Netlon
                });
                con = res[0].PvcDoor;
                console.log("Netlon insisde", state.count);
            }
            if (props.topLine === "False Ceiling") {
                setstate({
                    ...state,
                    count: res[0].FalseCeiling
                });
                con = res[0].PvcDoor;
                console.log("PvcDoor insisde", state.count);
            }
            if (props.topLine === "Modular kitchen") {
                setstate({
                    ...state,
                    count: res[0].Modularkitchen
                });
                con = res[0].PvcDoor;
                console.log("PvcDoor2 insisde");
            }
            if (props.topLine === "Showcases") {
                setstate({
                    ...state,
                    count: res[0].SHOWCASES,
                });
                con = res[0].Showcases;
                console.log("CupBoard insisde");
            }
            if (props.topLine === "Wardrobe") {
                setstate({
                    ...state,
                    count: res[0].CupBoard,
                });
                con = res[0].PvcDoor;
                console.log("CupBoard insisde");
            }

            if (props.topLine === "Aluminium Windows") {
                setstate({
                    ...state,
                    count: res[0].AluminumWindow,
                });
                con = res[0].AluminiumWindow;
                console.log("Aluminium Window");
                }
                if (props.topLine === "OurWork") {
                    setstate({
                        ...state,
                        count: res[0].extra1,
                    });
                    con = res[0].extra1;
                    console.log("OurWork Window");
                    }
            // if (res == "No") {
            //   console.log("No");           

            // }
            // else {       
            //   console.log("else");
            //   console.log(res);        

            // }

        })
            .catch((error) => {
                console.error(error);
            });

        if (state.proc) {

        }
        imgdisp(state.count);
    }

    // const imglen = () => {
    //     console.log("props");
    //     console.log(props);
    //     let icount = props.imgcount;
    //     while (icount > 0) {
    //         console.log("icount" + icount);
    //         icount--;
    //     }
    // }
    const imgdisp = (prop) => {
        // let icount = props.imgcount;

        // let icount = state.count;
        let icount = prop;
        let iar = [];
        while (icount > 0) {
            // console.log("icount"+icount);

            // iar=`${props.imgurl}${icount}.jpg`;

            iar.push(`${props.imgurl}${icount}.jpg`);
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
        setAllImg(iar);
        // allimages = iar;
        // {
        //     state.allimgs.map(imageUrls => {
        //         console.log(imageUrls + "   stateallimg")
        //     })
        // }
    }
    // const iny = () => {
    //     <img className="img-style d-block w-100" src={`${props.imgurl}2.jpg`} />
    // }
    return (
        <RubberBand delay={2000}>
            <div className={props.screenname === "SubTemp" ? "img-container sub-container" : "img-container"}

            >
                {/* <Carousel infiniteLoop stopOnHover 
            autoPlay={props.autoplay ==="true" ? true:false}
                centerMode showThumbs ={props.screenname ==="SubTemp"?false:true} 
                emulateTouch
                showIndicators={props.screenname ==="SubTemp"?false:true} 
            
            > */}

                {/* {allimg.map(imageUrls => ( */}

                {/* <> 
                        <img className={props.screenname === "SubTemp" ?
                        "sub-img-cont img-style d-block w-100 "
                        :"img-style d-block w-100"} src={`${imageUrls}`} />
                    //    <img className="img-style d-block w-100" src={`${props.imgurl}1.jpg`} />  
                       
                    </> */}
                {/* ))}              */}

                {/* </Carousel> */}

                <Swiper
                    effect="cube"
                    spaceBetween={10}
                    zoom={true}                
                    onZoomChange
                    slidesPerView={props.screenname === "SubTemp" ? 1 : window.innerWidth < 520 ? 2 : 4}
                    navigation
                    pagination={{ clickable: true }}
                    
                    // scrollbar={{ draggable: true,dragSize:50 }}
                    //   onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                // effect={props.screenname === "SubTemp"?"cube":"" }

                >



                    {allimg.map(imageUrls => (
                       
                        <SwiperSlide key={imageUrls}>
                            
                            <img
                                className={props.screenname === "SubTemp" ?
                                    "sub-img-cont img-style d-block w-100 "
                                    : "img-style d-block w-100"}
                                    alt="Slide Images"
                                src={`${imageUrls}`} />
                                
                            {/* <img className="img-style d-block w-100" src={`${props.imgurl}1.jpg`} />  */}
                           
                        </SwiperSlide>
                        
                    ))}

                </Swiper>

                <div className={props.lightBg ? "photo-desc-lable photo-desc" : "photo-desc-lable photo-desc white-shade"}>{props.label}</div>

                <div className={props.lightBg ? "photo-desc " : "photo-desc white-shade"}>{props.title}</div>
            </div>
        </RubberBand>
    )
}

export default CarouselContainer;