import React, { useState, useEffect } from 'react';
import './MainComponent.css';
import * as Datas from '../Datas/Datas';
import Card from '../Card/Card';
import InnerComponent from './InnerComponent/InnerComponent';
import Jello from 'react-reveal/Jello';

// import * as Datas from '../../Datas/Datas';
import { Link } from 'react-router-dom';

import SubTemplate from '../Screens/SmallComponent/SubTemplate';
import Spinner from '../Spinner/Spinner';
import NoData from '../Screens/NoData/NoData';
import MainTemplate from '../MainScreenComponent/MainTemplate';
import CreateHeaderDetails from './CreateComponent/CreateHeaderDetails';
const MainComponent = (props) => {
    const initialval = {
        imageobj: [],
        imageName: [],
        load: false,
        selectedtitle: '',
        display: false,
        imageCount: '',
        imgurl: '',
        allheadercomponent: [],
        imagecomponent: [],
        selectedtheadercomponent: '',
        data:false,
        useredits: localStorage.getItem('useredit')
    };
    let display = false;
    let imgurl = '';

    let imagecomponent = [];
    let allheadercomponent = [];
    const [state, setState] = useState(initialval);
    useEffect(() => {
        // console.log('retrive');
        // console.log(encrypted_text + ' :encrypted_text');
        // localStorage.setItem('useredit', encrypted_text);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        // const decrypted_string = decrypt("salt", "66656d6364"); // login - 66656d6364 6c6b66796f - false
        // console.log(decrypted_string + ' :decrypted_string');
        fetchdetails();
    }, [])

   
    const fetchdetails = () => {
        // console.log("fetchdetails from MainComponent");
        let ls = localStorage.getItem('useredit');

        // console.log('ls '+ls);
        let imgs;
        if (ls == '66656d6364') {
            imgs = 'all';
        }
        else {
            imgs = 'single';
        }
        fetch(Datas.Headrer_Details,
            {
                // mode: 'no-cors',
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                }, body: JSON.stringify({
                    // we will pass our input data to server
                    imgs: imgs,
                })
            }
        ).then(res => res.json()).then(res => {
            console.log("res MainComponent");
            console.log(res);
            if(res == 'No Data' ||res == 'Something Went Wrong'  )
            {
                setState({
                    ...state,                   
                    load: true,
                    errorcode:res
                })   
            }
            else if (ls != '66656d6364') {
                const arr2 = res.filter(d => d.user_display == '1');
                // setTimeout(() => {
                    setState({
                        ...state,
                        allheadercomponent: arr2,
                        load: true,
                        data: true,
                    })
                // }, 3000);
                // console.log(arr2);
            }
            else {
                setTimeout(() => {
                    setState({
                        ...state,
                        allheadercomponent: res,
                        load: true,
                        data: true,
                    })
                }, 3000);
            }

            // else
            // {
            //     setState({
            //         ...state,
            //         allheadercomponent: res,
            //         load: true,
            //         data: true,
            //     })     
            // }
            // console.log("res MainComponent");
            // console.log(res);
            // console.log(state.allheadercomponent);
            //     setTimeout(() => {
            //         setState({
            //             ...state,
            //             allheadercomponent: res,
            //             load: true,
            //         })
            //  }, 3000);

           



            //   console.log('after filter header$$$$$$');
            //   console.log(header);


            // allheadercomponent = res;
            // {
            //     allheadercomponent.map((i, index) => {
            //         console.log(i.topLine + " up " + index);
            //     })
            // }   
            // console.log('all state1 MainComponent');



        }).catch((error) => {
            console.error(error);
        });
        // fetchimagedetails();

    }



    const handleheaderClick = (headerName, headerdetails) => {
        //console.log(" headerName,headerdetails click" + headerName + headerdetails);
        //console.log(headerdetails);
        // if (state.selectedtitle !== imageName) {
        //     setState({
        //         ...state,
        //         // display: !state.display,
        //         selectedtitle: imageName,
        //         imageCount: imageCount,
        //         imgurl:`${Datas.Img_Server}/${imglink}/`,
        //     });

        // }
        // else {
        //     setState({
        //         ...state,
        //         selectedtitle: imageName,
        //         imageCount: imageCount,
        //         display:!state.display,
        //         // imgurl:`${Datas.Img_Server}/${imglink}/`,
        //     });

        // }

        setState({
            ...state,
            display: !state.display,
            selectedtitle: headerName,
            selectedtheadercomponent: headerdetails,
        });
        // imgurl=`${Datas.Img_Server}/${imglink}/`;
        // console.log(" imgurl"  + state.imgurl);
    }
    if (!state.load) {
        return <Spinner />
    }
    if(state.load && !state.data)
    {
        return <NoData errorcode={state.errorcode}/>
    }
    
    return (
        <> <Jello delay={500}>  

            <div className="upload-style  ">
                {/* <div className="sitetext-font top-line why_pvc_head">Title </div> */}
                {state.load && state.data ?
                    <  >
                        {/* <Jello delay={2500} > */}
                        {state.allheadercomponent.map((i, index) => (
                            <div  key={index} >
                                
                                {/* <Link
                                    style={{ padding: 10, textDecoration: 'none', alignItems: 'center' }}
                                    to={{
                                        pathname: `/screen=${i.topLine}`,
                                        selectedtitle: i.alt,
                                        selectedtheadercomponent: i,
                                        screen:'home'
                                    }}> */}
                                    {/* <Card className="why_pvc_card-style space-text" > */}
                                     
                                        <MainTemplate {...i} />

                                    {/* </Card>                                     */}
                                {/* </Link> */}
                            </div>
                        ))}
                        {/* </Jello> */}
                    </>
                    : null}
                    <>
                    {state.useredits === '66656d6364' ?
                    <CreateHeaderDetails />
                    :null}
                    </>

                {/* <CarouselContainer  imgcount={state.imageCount} imgurl={state.imgurl} topLine={state.selectedtitle} autoplay='true' /> */}
            </div>

            </Jello>
        </>
    )
}

export default MainComponent