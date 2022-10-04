import React, { useState, useEffect } from 'react'
import Card from '../../Card/Card';
import * as Datas from '../../Datas/Datas'
import '../../PopUpForm/Form.css';
// import Dropdown from "react-bootstrap/Dropdown";
import { FormControl, InputGroup } from 'react-bootstrap';
import Switch from "react-switch";
import '../MainComponent.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from 'react-bootstrap/Button';

const SubHeaderDetails = (props) => {
    const initial = {
        headerName: props.details[0].Sub_Alt,
        detailid: props.details[0].Sub_Detail_Id,
        label: props.details[0].Sub_Lable,
        title: props.details[0].Sub_Title,
        displayheader: props.details[0].Sub_User_Display,
        titleimage: props.details[0].Sub_TitleImage,
        load: false,
        optarr: [],
        imgcount: props.details[0].Sub_ImgCount,
        displayno: props.details[0].Sub_Display_No
    };


    const [state, setState] = useState(initial);
    const display = [
        { label: "Full Display", value: 1 },
        { label: "Cart Type", value: 2 },
    ];
    const options = [
        'Full Screen', 'Card Type'
    ];
    const defaultOption = options[0];
    const imgoptions = [
        '1', '2', '3', '4',
    ];
    const imgdisoptions = [
        'single', 'multiple'
    ];

    const [optarrs, setOptarrs] = useState(['1']);
    const [headti, setheadti] = useState();
    const defaultImgOption = options[0];
    let optarr = [];
    useEffect(() => {
        console.log('HeaderDetails');
        console.log(props);
        // console.log(props.selectedtitle);

        // for (let i = 1; i <= props.headerDetails.imgcount; i++) {
        //     // console.log('handletitle i '+i);   
        //     optarr.push(i);
        // }
        // setOptarrs(optarr);
        // console.log('optarrs');
        // console.log(optarrs);


        if (props.screen == 'create') {
            // console.log(optarrs);

        }
        else {
            handletitle();
        }

    }, []);
    let header;
    const handletitle = () => {
        header = props.details[0].Sub_TitleImage;
        var last = header.substring(header.lastIndexOf("/") + 1, header.length);
        var arrVars = last.split(".");
        console.log(arrVars + ' header arrVars');
        // for (let i = 1; i <= props.headerDetails.imgcount; i++) {
        //     // console.log('handletitle i '+i);   
        //     optarr.push(i);
        // }
        header = arrVars[0];
        setheadti(header);
        setState({
            ...state,
            titleimage: arrVars[0],
            // optarr: optarr
        });
        // console.log('arrVars+last ' + arrVars[0]);
        // console.log('optarr i ' + optarr);
    }
    const changeHeaderName = (event) => {
        setState({
            ...state,
            errordetail: '',
            headerName: event.target.value
        });
        // console.log(state.headerName);
    }
    const changelabel = (event) => {
        setState({
            ...state,
            errordetail: '',
            label: event.target.value
        });
        //console.log(state.label);
    }
    const changeTitle = (event) => {
        setState({
            ...state,
            errordetail: '',
            title: event.target.value
        });
        //console.log(state.title);
    }

    const changedisplayheader = (event) => {
        //console.log(event);
        setState({
            ...state,
            errordetail: '',
            displayheader: event
        });
        //console.log(state.displayheader);
    }


    const updateHandler = () => {

        console.log('Upload 12 ');
        console.log(state);
        // console.log('props');
        // console.log(props);
        let titleimage = `${props.details[0].imgurl}${state.titleimage}.jpg`; //props.headerDetails.titleimage;
        console.log('titleimage ' + titleimage);
        // console.log(state.autoplay);
        headerdetailsHandler(titleimage, 'update');
    }

    const insertHandler = () => {

        console.log('Upload 12 ');
        console.log(state);
        // console.log('props');
        // console.log(props);
        if (state.headerName !== null) {
            let headername = state.headerName;
            console.log(headername);
            headername = headername.replace(/\s+/g, '');
            let titleimage = `/${headername}/${state.titleimage}.jpg`; //props.headerDetails.titleimage;
            console.log('titleimage ' + titleimage);
            headerdetailsHandler(titleimage, 'insert');
        }

    }
    const headerdetailsHandler = (titleimage, screen) => {
        console.log("updateheaderdetails from UploadComponent " + screen + props.details[0].Header_Details_id);
        console.log(state);
        console.log(props);
        let head = state.headerName.trim();
        head = head.replace(/\s+/g, '');
        head = `/${head}/`;
        console.log('head ' + head);
        fetch(Datas.Sub_Details,
            {
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                }, body: JSON.stringify({
                    // we will pass our input data to server                  
                    label: state.label,
                    title: state.title,            
                    alt: state.headerName,                    
                    userdisplay: state.displayheader,                    
                    subheaderid:state.detailid,
                    topLine: state.headerName.trim(),
                    type: screen, 
                    displayno:state.displayno,
                    headerid:props.details[0].Header_Details_id
                })
            }
        ).then(res => res.json()).then(res => {
            console.log("res imagecomponent");
            console.log(res);
            if (res == 'Added' || 'Updated') {
                alert(res);
                // window.location.reload();
            }
            else {
                console.log('issue');
                alert('issue');
            }
            // setstate({
            //     ...state,

            // });

        })
            .catch((error) => {
                console.error(error);
            });
    }
    // let screenstyle = props.details[0].lightBg == "false" ? 'form-lable-styles light-text-style' : 'form-lable-styles ';

    let screenstyle = 'form-lable-styles screen-spacing ';

    const ScrollToTop = ({ children, location }) => {
        useEffect(() => {
            // window.scrollTo({
            //     top: 0,
            //     left: 0,
            //     behavior: "smooth"
            // });
        }, []);

        return children || null;
    };


    return (
        < >
            {/* <ScrollToTop> */}
            {/* <label htmlFor="Details" className={screenstyle}>Header Name</label>
            <input
                id="details"
                type="text"
                value={state.headerName}
                className={screenstyle}
                onChange={changeHeaderName}
            /> */}

            <div className="sitetext-font top-line why_pvc_head menu-details menu-header-top">Sub Menu Details</div>
            <div className="sitetext-font top-line why_pvc_head menu-details">{state.headerName}</div>
            <InputGroup
                // as={Col} 
                className=" header-content"
            >
                <label htmlFor="Details" className={screenstyle}>Sub Header Id : {state.detailid}</label>
                <label htmlFor="Details" className={screenstyle}>Sub Header Name</label>
                <FormControl placeholder="Header Name" as="textarea" value={state.headerName} aria-label="With textarea"
                    onChange={changeHeaderName}
                />

                <label htmlFor="Details" className={screenstyle}>Sub Title</label>
                <FormControl placeholder="Title" as="textarea" rows={3} cols={30} value={state.title} aria-label="With textarea" onChange={changeTitle} />
                <label htmlFor="Details" className={screenstyle}>Sub Description </label>
                <FormControl placeholder="Header Details" size="lg" as="textarea" rows={3} cols={40} value={state.label} aria-label="With textarea" onChange={changelabel} />

                <label htmlFor="Details" className={screenstyle}>Display</label>

                {/* <FormControl  type="switch"  placeholder="Display Header" as="textarea" value={state.displayheader}  aria-label="With textarea" onChange={changedisplayheader}/> */}

                <Switch onChange={changedisplayheader} checked={state.displayheader} />
                <label htmlFor="Details" className={screenstyle}>Sub Title Image:</label>
                <label htmlFor="Details" className={screenstyle}>{headti}</label>
                <label htmlFor="Details" className={screenstyle}>Sub Display Order</label>
                <FormControl placeholder="Display No" as="textarea" value={state.displayno} aria-label="With textarea" onChange={changeTitle} />

                {!state.displayheader ?
                    <div className="sitetext-font top-line why_pvc_head">Now the Details will Hidden. To show change the Display option</div>

                    : null
                }
            </InputGroup>

            <div className="top-line menu-details">
                {props.screen == 'create' ?
                    <Button className="new-but-sty" onClick={insertHandler} variant="outline-primary">Add Sub Header Details</Button>
                    :
                    <Button className="menu-details new-but-sty " onClick={updateHandler} variant="outline-primary">Update Sub Header Details</Button>
                }
            </div>
            <div className={props.lightTextDesc === 'true' ? "photo-desc white-text-desc " : "photo-desc   "}>{state.title}</div>
            <div className={props.lightBg === 'true' ? "photo-desc-lable photo-desc white-text-label" : "photo-desc-lable photo-desc "}>{state.label}</div>

          
            {/* </ScrollToTop> */}

        </>
    );
}

export default SubHeaderDetails;
