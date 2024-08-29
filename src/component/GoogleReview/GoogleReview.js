import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import { Swiper, SwiperSlide } from 'swiper/react';
import './GoogleReview.css';
import * as Datas from '../Datas/Datas';
import Spinner from '../Spinner/Spinner';
import StarComponent from '../StarComponent/StarComponent';
const GoogleReview = (props) => {
    const initial = {
        load: false,
        nodata: false,
        review: {},
        rating: false

    };
    const [state, setstate] = useState(initial);
    const isMobile = window.innerWidth <= 1060;
    useEffect(() => {
      
            fetchreview();
        
        
        console.log('isMobile ' + isMobile + window.innerWidth);
    }, []);
    useEffect(() => {
        // console.log('isMobile '+ isMobile +window.innerWidth );
    }, [isMobile]);
    const review = [
        {
            name: 'Rekob Ramya',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Brandon Savage',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    const fetchreview = () => {
        // console.log("fetchreview from UploadComponent");

        fetch(Datas.GoogleReviewURL,
            {
                method: 'get',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                }
            }
        ).then(res => res.json()).then(res => {
            console.log("res imagecomponent cas");
            console.log(res);

            setstate({
                ...state,
                review: res,
                load: true,
                rating: res.rating ? res.rating : false
            });

            // console.log('state.rev ' + state.nodata);
            // console.log(state.review);
            // console.log('state.rating ' + state.rating);
        })
            .catch((error) => {
                console.error(error);
            });
    }

    if (!state.load) {
        return <Spinner />
    }
    return (
        <>
            {/* screen='footer' */}
            {/* <div 
        // className={props.screen ==='footer'? null : 'rev-cont1'}
        > */}
            {
                state.review.status !== "success" ?
                    <div className={props.screen === 'footer' ? 'review-text' : 'rev-cont1'} >
                        No Reviews
                    </div> :
                    <>
                        <div className={props.screen === 'footer' ? 'review-text' : 'rev-cont1'} >
                            Google Review
                        </div>
                        <div className={props.screen === 'footer' ? 'review-text' : 'rev-cont1'} >

                            {state.rating ?
                                <div >
                                    Overall Rating
                                    <StarComponent star={state.rating} />
                                </div>
                                :
                                null}
                        </div>
                    </>
            }
            {
                state.review.status == "success" &&
                <div className={props.screen === 'footer' ? 'rev-container footer-style' : 'rev-container '} >

                    {state.load ?
                        <Swiper
                            effect="cube"
                            spaceBetween={10}
                            zoom={true}
                            // onZoomChange
                            Autoplay
                            slidesPerView={isMobile ? 1 : 3}
                            navigation
                        // pagination={{ clickable: true }}
                        >

                            {state.review.reviews.map(rev => {
                                return (
                                    <SwiperSlide key={rev._key} style={{ padding: 10, textDecoration: 'none' }}>
                                        <ReviewDetails props={rev} key={rev._key} />
                                    </SwiperSlide>
                                )
                            })
                            }
                        </Swiper>
                        : null}

                </div>
            }
        </>
    )


}
export default GoogleReview;
