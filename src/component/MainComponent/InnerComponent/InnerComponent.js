import React, { useState, useEffect } from 'react'
import Card from '../../Card/Card';
import * as Datas from '../../Datas/Datas'
import HeaderDetails from './HeaderDetails';
import '../MainComponent.css';
import CarouselContainer from '../../CarouselContainer/CarouselContainer';
import Button from 'react-bootstrap/Button';
import { FormControl, InputGroup } from 'react-bootstrap';
import ImageComponent from '../../ImageComponent/ImageComponent';
import SubHeaderDetails from './SubHeaderDetails';
import StyleTemplate from '../../Screens/StyleTemplate/StyleTemplate';
import MainTemplate from '../../MainScreenComponent/MainTemplate';

// import { Storage } from "@google-cloud/storage";
// import express from "express";
// import cors from "cors";
// import { format } from "util";
// import Multer from "multer";
// const app = express();
// const port = 5000;

const InnerComponent = (props) => {
    const initial = {
        imgchange: false,
        newimgurl: '',
        headercomponent: (props.selectedtheadercomponent? props.selectedtheadercomponent : null),
        selectedtsubheadercomponent:props.selectedtsubheadercomponent,
        imagecomponent: '',
        load: false,
        imgtitle: '',
        imgdesc: '',
        useredits: localStorage.getItem('useredit')
    };
    const [state, setstate] = useState(initial);
    useEffect(() => {
        console.log('InnerComponent selectedtheadercomponent is');
        // console.log(props.selectedtsubheadercomponent);
        console.log(props.selectedtheadercomponent);
        // console.log(props.screen);
        
        // console.log(props.selectedtheadercomponent);
        console.log("state.headercomponent "+state.headercomponent);
        
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        // window.scrollTop(0);
    }, [])

    return (
        <>


            <div
                // className={state.headercomponent.lightBg == "true" ? 'home__hero-section darkBg ' : 'home__hero-section '}
                className={' font-color-text'}
            >
                {state.useredits === '66656d6364' ?
                    <>
                        <Card className=" top-card top-card-style selected-title-space ">
                            <HeaderDetails details={props.selectedtsubheadercomponent} />
                        </Card>
                        < Card className="top-card top-card-style selected-title-space ">
                            <SubHeaderDetails details={props.selectedtsubheadercomponent} />
                        </Card>
                    </>
                    : 
                  
                    
                     <>
                        {props.selectedtsubheadercomponent.map((i, index) => (
                            <div key={index} >
                               <MainTemplate {...i} screen={'SelectedSubScreen'}/>
                               
                            </div>
                        ))}
                    </>
                   }
                {state.headercomponent.length>0  ?
                <StyleTemplate details={state.headercomponent} screen='SelectedDetails' useredits={state.useredits} selectedtsubheadercomponent={props.selectedtsubheadercomponent}/>
                :null }
                {/* {props.selectedtheadercomponen.length>0  ?
                <StyleTemplate details={props.selectedtheadercomponen} screen='SelectedDetails' useredits={state.useredits}/>
                :null } */}
                {/* {state.useredits =='66656d6364' ?
                        <ImageComponent screen='create'  data={state.headercomponent} topline={state.headercomponent.topLine} headerid={state.headercomponent.Header_Details_id}/>
                        : null} */}
            </div>
        </>
    )
}

export default InnerComponent;