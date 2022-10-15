import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';

import Jello from 'react-reveal/Jello';

import * as Datas from '../Datas/Datas';

import 'react-dropdown/style.css';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import { FormControl, InputGroup } from 'react-bootstrap';
// export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json";
const ImageComponent = (props) => {

    useEffect(() => {
        // console.log('ImageComponent  1');
        // console.log(props.data[0]);
        // console.log(props);
        // console.log(props.data.alt);
        // console.log(props.screen);
    }, []);

    const initial = {
        imgchange: false,
        newimgurl: '',
        data: props.data[0],
        imagecomponent: '',
        load: false,
        imgtitle: '',
        imgdesc: '',
        // selectedtitle: props.data.alt,
        screen: props.screen,
        imgnewno: '',
        uploadimg:'',
       
    };

    const [state, setstate] = useState(initial);

    const imgUpload = () => {
        // console.log('imgUpload');
        // console.log( state.data);
        // console.log(props.data[0]);
        // console.log(props.data[0].Image_Url_No);
        // console.log('topline ' + props.topline);
        // let temp = state.uploadimg;
        // let  filename=props.selectedImage+'.jpg';
        // let foldername=props.topline.replace(/\s+/g, '');
        // console.log(foldername + ' foldername');
        // temp.webkitRelativePath='1.png';
        // console.log("insertImg from UploadComponent " +  state.uploadimg + state.newimgurl +props.selectedImage,props.screen);
        insertImg();
        // uploadFile();
    }

    
    const bucketName = 'helpone-9bf33.appspot.com';
    // The path to your file to upload
    const filePath = 'helpone-9bf33.appspot.com/jrmodularenterprises';

    // The new ID for your GCS file
    const destFileName = '1.pg';

    const insertImg = async () => {
        const formData = new FormData();
        formData.append('avatar', state.uploadimg);
        // formData.append('avatar', {avatar:state.uploadimg,filename:'22.jpg'});
        let  filename=props.data[0].Image_Url_No+'.jpg'; // img no

        let foldername=props.data[0].topLine.replace(/\s+/g, '');
        // let imgtitle = props.screen === 'modify' ? props.imgtitle : state.imgtitle;
        // let imgdesc = props.screen === 'modify' ? props.imgdesc : state.imgdesc;
        let subfoldername = props.data[0].Sub_TopLine.replace(/\s+/g, '');
        // console.log('subfoldername ' + subfoldername +foldername);
        formData.append('uploadtype', props.screen);
        formData.append('foldername', foldername);
        formData.append('filename', filename);
        // formData.append('imgtitle', imgtitle);
        // formData.append('imgdesc', imgdesc);
        // formData.append('headerid', props.headerid); 
        formData.append('subfoldername',subfoldername );
        formData.append('subheaderid',props.data[0].Sub_Detail_Id );
        formData.append('imageurlno', props.data[0].Image_Url_No); 
        // console.log("insertImg from UploadComponent " +  state.uploadimg + state.newimgurl +props.selectedImage,props.screen);
        // console.log(state.newimgurl);
        // console.log( formData);
        // uploadFile();
        await    axios.post(Datas.Insert_Image, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
            }).then((res) => {
            //    console.log('File uploaded!' );
            //    console.log(res);
            if (res.data == 'Image Added')
            {
                alert('Image Added');
                setstate('');
                window.location.reload(false);
            }
            else if (res.data == 'Updated')
            {
                alert('Updated Image');
                setstate('');
                window.location.reload(false);
            }
            else {
                console.log('Issue');
                alert('Issue in Uploading'); 
            }
           }) 

        // fetch(Datas.Insert_Image,
        //     {
        //         method: 'post',
        //         header: {
        //             'Accept': 'application/json',
        //             'Content-type': 'application/json',
        //         }, body: JSON.stringify({
        //             // we will pass our input data to server
        //             avatar: state.uploadimg
        //         })
        //     }
        // ).then(res => res.json()).then(res => {
        //     console.log("res Update_Image_Details");
        //     console.log(res);
        //     if (res == 'Updated') {
        //         alert('Updated');
        //     }
        //     else {
        //         console.log('issue');
        //     }
        //     // setstate({
        //     //     ...state,

        //     // });

        // })
        //     .catch((error) => {
        //         console.error(error);
        //     });


        // fetch(Datas.Update_Image_Details,
        //     {
        //         method: 'post',
        //         header: {
        //             'Accept': 'application/json',
        //             'Content-type': 'application/json',
        //         }, body: JSON.stringify({
        //             // we will pass our input data to server
        //             headerid: props.headerid,
        //             imagetitle: state.imgtitle,
        //             imagedescription: state.imgdesc,
        //             image:formData,
        //             type:'create'
        //         })
        //     } 
        //     .then(res => res.json()).then(res => {
        //     console.log("res insertImg");
        //     console.log(res);
        //     if (res == 'issue') {
        //         alert('issue');
        //     }
        //     else {
        //         console.log('issue');
        //     }
        //     setstate({
        //         ...state,
        //         imgnewno:res,
        //     });

        // }) .catch((error) => {
        //         console.error(error);
        //     })

    }


    const selectImg = (event) => {
        // console.log('addNewImage');
        // console.log(event);
        // console.log(event.target.files[0]);
       
        setstate({
            ...state,
            newimgurl: URL.createObjectURL(event.target.files[0]),
            uploadimg: event.target.files[0]
        });
    }
    const changeTitle = (event) => {
        // console.log(event.target.value);
        setstate({
            ...state,
            errordetail: '',
            imgtitle: event.target.value
        });
        // console.log(state.imgtitle);
    }
    const changedesc = (event) => {
        // console.log(event.target.value);
        setstate({
            ...state,
            errordetail: '',
            imgdesc: event.target.value
        });
        // console.log(state.imgdesc);
    }

    return (
        <>


            <div className="sitetext-font top-line why_pvc_head menu-details menu-header-top"> {state.screen == 'create' ? 'Add New Images' : 'Change the Image'}
                {state.selectedtitle ? ' to ' : null} {state.selectedtitle} </div>

            <div className={'addNewImg'}>
                <input type="file" name="image"
                    onChange={selectImg}
                />
            </div>
            {state.imgchange ?
                <div> change</div>
                : null
            }

            {state.newimgurl ?
                <div className={'addNewImg '}>
                    <img
                        className={"img-style d-block w-100 newimgstyle"}
                        alt="Slide Images"
                        src={state.newimgurl}
                    // src={`${state.newimgurl }`} 
                    />

                </div>
                : null}

            {state.newimgurl ?
                <div >

                    {state.screen == 'create' ?
                        <InputGroup
                            // as={Col} 
                            className=" header-content"
                        >
                            <label htmlFor="Details" className="form-lable-styles">Image Title</label>
                            <FormControl placeholder="Image Title" as="textarea" rows={3} cols={30} value={state.imgtitle} aria-label="With textarea" onChange={changeTitle} />
                            <label htmlFor="Details" className="form-lable-styles">Image Description</label>
                            <FormControl placeholder="Image Description" size="lg" as="textarea" rows={3} cols={40}
                                value={state.imgdesc} aria-label="With textarea" onChange={changedesc} />
                        </InputGroup>
                        : null}
                    <div className="top-line update-button-style">

                        <Button className="new-but-sty" onClick={imgUpload} variant="outline-primary">Upload Image</Button>
                    </div>

                </div>
                : null}


        </>
    )
}

export default ImageComponent