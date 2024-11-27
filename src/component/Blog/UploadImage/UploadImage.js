
import React, { useState, useEffect } from 'react';


import * as Datas from '../../Datas/Datas';

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import { FormControl, InputGroup } from 'react-bootstrap';

const UploadImage = (props) => {

    let initialval = {
        newimgurl: '',
        uploadimg: '',
    }
    const [state, setstate] = useState(initialval);
    const imgUpload = () => {
        insertImg();
    }
    const insertImg = async () => {
        const formData = new FormData();
        formData.append('avatar', state.uploadimg);
        // formData.append('avatar', {avatar:state.uploadimg,filename:'22.jpg'});
        let filename = '1234.jpg'; // img no

        // let foldername=props.data[0].topLine.replace(/\s+/g, '');
        // let imgtitle = props.screen === 'modify' ? props.imgtitle : state.imgtitle;
        // let imgdesc = props.screen === 'modify' ? props.imgdesc : state.imgdesc;
        // let subfoldername = props.data[0].Sub_TopLine.replace(/\s+/g, '');
        // console.log('subfoldername ' + subfoldername +foldername);
        formData.append('uploadtype', props.screen);
        // formData.append('foldername', foldername);
        formData.append('filename', filename);
        // formData.append('imgtitle', imgtitle);
        // formData.append('imgdesc', imgdesc);
        // formData.append('headerid', props.headerid); 
        // formData.append('subfoldername',subfoldername );

        // console.log("insertImg from UploadComponent " +  state.uploadimg + state.newimgurl +props.selectedImage,props.screen);
        console.log(state.newimgurl);
        console.log( formData);
        // uploadFile();
        await axios.post(Datas.Upload_Image_Post, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then((res) => {
               console.log('File uploaded!' );
               console.log(res);
            if (res.data == 'Image Added') {
                alert('Image Added');
                setstate('');
                window.location.reload(false);
            }
            else if (res.data == 'Updated') {
                alert('Updated Image');
                setstate('');
                window.location.reload(false);
            }
            else {
                console.log('Issue');
                alert('Issue in Uploading');
            }
        })


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

    return <>
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
                <div className="top-line update-button-style">

                    <Button className="new-but-sty" onClick={imgUpload} variant="outline-primary">Upload Image</Button>
                </div>
            </div>
            : null}
    </>
}

export default UploadImage;