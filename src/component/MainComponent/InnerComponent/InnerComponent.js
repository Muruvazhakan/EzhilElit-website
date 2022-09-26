import React, { useState, useEffect } from 'react'
import Card from '../../Card/Card';
import * as Datas from '../../Datas/Datas'
import HeaderDetails from './HeaderDetails';
import '../MainComponent.css';
import CarouselContainer from '../../CarouselContainer/CarouselContainer';
import Button from 'react-bootstrap/Button';
import { FormControl, InputGroup } from 'react-bootstrap';
import ImageComponent from '../../ImageComponent/ImageComponent';

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
        headercomponent: props.selectedtheadercomponent,
        imagecomponent: '',
        load: false,
        imgtitle: '',
        imgdesc: '',
        useredits:localStorage.getItem('useredit')
    };
    const [state, setstate] = useState(initial);
    useEffect(() => {
        //console.log('InnerComponent selectedtheadercomponent 1');
        //console.log(state.selectedtheadercomponent);
        //console.log(props);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        // window.scrollTop(0);
    }, [])
    const addNewImage = (title) => {
        //console.log('addNewImage');
        //console.log(title);
        // setstate({
        //     ...state,
        //     imgchange: true
        // });
    }


    // const insertImg = () => {
    //     console.log('insertImg');
    //     console.log(state);
    //     console.log(state.headercomponent.Header_Details_id);
    //     imagename
    //     imageheaderid
    //     imageurlno
    //     imagetitle
    //     imagedescription
    // }
   
    
    // const multer = Multer({
    //     storage: Multer.memoryStorage(),
    //     limits: {
    //         fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    //     },
    // });
    // app.use(cors());

    // const cloudStorage = new Storage({
    //     keyFilename: `${__dirname}/service_account_key.json`,
    //     projectId: "PROJECT_ID",
    // });
    // const bucketName = "YOUR_BUCKET_NAME";
    // const bucket = cloudStorage.bucket(bucketName);
    // app.post("/upload-file-to-cloud-storage", multer.single("file"), function (req, res, next) {
    //     if (!req.file) {
    //         res.status(400).send("No file uploaded.");
    //         return;
    //     }
    //     const blob = bucket.file(req.file.originalname);
    //     const blobStream = blob.createWriteStream();
    //     blobStream.on("error", (err) => {
    //         next(err);
    //     });
    //     blobStream.on("finish", () => {
    //         // The public URL can be used to directly access the file via HTTP.
    //         const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
    //         res.status(200).json({ publicUrl });
    //     });
    //     blobStream.end(req.file.buffer);
    //     console.log(req.file);
    // });

    return (
        <>

            <Card className="        
             top-card 
            top-card-style selected-title-space ">
                <div
                    className={state.headercomponent.lightBg == "true" ? 'home__hero-section ' : 'home__hero-section darkBg'}
                >
                    {state.useredits =='66656d6364' ?
                        <HeaderDetails headerDetails={props.selectedtheadercomponent} />
                        : <div className="sitetext-font top-line why_pvc_head">{state.headercomponent.alt}</div>}

                    <CarouselContainer imgs={state.headercomponent.imgs} lightBg={state.headercomponent.lightBg}
                        title={state.headercomponent.title} imgcount={state.headercomponent.imgcount}
                        imgurl={state.headercomponent.imgurl} label={state.headercomponent.label} topLine={state.headercomponent.topLine}
                        autoplay={state.headercomponent.autoplay} headerid={state.headercomponent.Header_Details_id} useredit={props.useredit}
                        lightTextDesc={state.headercomponent.lightTextDesc}
                        all={state.headercomponent}  />
                    {state.useredits =='66656d6364' ?
                        <ImageComponent screen='create'  data={state.headercomponent} topline={state.headercomponent.topLine} headerid={state.headercomponent.Header_Details_id}/>
                        : null}
                </div>
            </Card>
        </>
    )
}

export default InnerComponent;