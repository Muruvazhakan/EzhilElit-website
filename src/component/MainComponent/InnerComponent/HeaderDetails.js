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
const HeaderDetails = (props) => {
    const initial = {
        headerName: props.headerDetails.alt,
        label: props.headerDetails.label,
        title: props.headerDetails.title,
        display_type: props.headerDetails.display_type == 1 ? 'Full Screen' : 'Cart Type',
        displayheader: props.headerDetails.user_display,
        lightBg: props.headerDetails.lightBg === 'true'? 1:0,
        lightText: props.headerDetails.lightText === 'true'? 1:0,
        lightTextDesc: props.headerDetails.lightTextDesc === 'true'? 1:0,
        titleimage: props.headerDetails.titleimage,
        autoplay: props.headerDetails.autoplay,
        load: false,
        optarr: [],
        imgcount: props.headerDetails.imgcount,
        imgs:props.headerDetails.imgs
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
        // console.log('HeaderDetails');
        // console.log(props.headerDetails);
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
        header = props.headerDetails.titleimage;
        var last = header.substring(header.lastIndexOf("/") + 1, header.length);
        var arrVars = last.split(".");

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
    const changedisplaytype = (event) => {
        console.log(event);
        setState({
            ...state,
            errordetail: '',
            display_type: event.value
        });
        //console.log(state.display_type);
    }
    const changeimgcount = (event) => {
        // console.log(event.value);
        setState({
            ...state,
            errordetail: '',
            imgcount: event.value
        });
        // console.log(state.display_type);
    }
    const changeimgdisp = (event) => {
        // console.log(event.value);
        setState({
            ...state,
            errordetail: '',
            imgs: event.value
        });
        // console.log(state.display_type);
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
    const changelightBg = (event) => {
        // console.log(event);
        setState({
            ...state,
            errordetail: '',
            lightBg: event,
        });
        // console.log(state.lightBg);
    }
    const changelightText = (event) => {
        console.log(event);
        setState({
            ...state,
            errordetail: '',
            lightText: event
        });
        // console.log(state.displayheader);
    }
    const changelightTextDesc = (event) => {
        console.log(event);
        setState({
            ...state,
            errordetail: '',
            lightTextDesc: event
        });
        // console.log(state.displayheader);
    }
    const changetitleimage = (event) => {
        console.log(event.value);
        setState({
            ...state,
            errordetail: '',
            titleimage: event.value,
        });
        // setOptarrs(event.value);
        // console.log(state.titleimage + state.optarr);
    }
    const changeautoplay = (event) => {
        // console.log(event);
        setState({
            ...state,
            errordetail: '',
            autoplay: event
        });
        // console.log(state.autoplay);
    }
    const updateHandler = () => {

        console.log('Upload 12 ');
        console.log(state);
        // console.log('props');
        // console.log(props);
        let titleimage = `${props.headerDetails.imgurl}${state.titleimage}.jpg`; //props.headerDetails.titleimage;
        console.log('titleimage ' + titleimage);
        // console.log(state.autoplay);
       headerdetailsHandler(titleimage,'update');
    }
    
    const insertHandler = () => {

        console.log('Upload 12 ');
        console.log(state);
        // console.log('props');
        // console.log(props);
        if(state.headerName !== null)
        {
            let headername = state.headerName;
        console.log(headername);
        headername=headername.replace(/\s+/g, '');
        let titleimage = `/${headername}/${state.titleimage}.jpg`; //props.headerDetails.titleimage;
        console.log('titleimage ' + titleimage);
        headerdetailsHandler(titleimage,'insert');
        }
        
    }
    const headerdetailsHandler = (titleimage,screen) => {
        console.log("updateheaderdetails from UploadComponent " + screen+props.headerDetails.Header_Details_id);
        console.log(state);
        console.log(props);
        let head=state.headerName.trim();
        head=head.replace(/\s+/g, '');
        head=`/${head}/`;
        console.log('head '+ head);
        fetch(Datas.Update_Headrer_Details,
            {
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                }, body: JSON.stringify({
                    // we will pass our input data to server
                    lightBg: state.lightBg ? 'true' : 'false',
                    lightText: state.lightText ? 'true' : 'false',
                    lightTextDesc: state.lightTextDesc ? 'true' : 'false',
                    label: state.label,
                    title: state.title,
                    imgcount: state.imgcount,
                    imgurl:head,
                    titleimage: titleimage,
                    alt: state.headerName,
                    displaytype: state.display_type,
                    userdisplay: state.displayheader,
                    autoplay: state.autoplay,
                    headerid: props.headerDetails.Header_Details_id,
                    topLine:state.headerName.trim(),
                    screen:screen,
                    imgs:state.imgs
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
    let screenstyle = props.headerDetails.lightBg == "false" ? 'form-lable-styles light-text-style' : 'form-lable-styles ';

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
            
            <div className="sitetext-font top-line why_pvc_head">{state.headerName}</div>
            <InputGroup
                // as={Col} 
                className=" header-content"
            >

                <label htmlFor="Details" className={screenstyle}>Header Name</label>
                <FormControl placeholder="Header Name" as="textarea" value={state.headerName} aria-label="With textarea"
                 onChange={changeHeaderName}
                  />
                
                <label htmlFor="Details" className={screenstyle}>Title</label>
                <FormControl placeholder="Title" as="textarea" rows={3} cols={30} value={state.title} aria-label="With textarea" onChange={changeTitle} />
                <label htmlFor="Details" className={screenstyle}>Label</label>
                <FormControl placeholder="Header Details" size="lg" as="textarea" rows={3} cols={40} value={state.label} aria-label="With textarea" onChange={changelabel} />

                <label htmlFor="Details" className={screenstyle}>Display Type</label>
                <Dropdown options={options} value={state.display_type} placeholder="Select an option" onChange={changedisplaytype} />
                <label htmlFor="Details" className={screenstyle}>Display</label>

                {/* <FormControl  type="switch"  placeholder="Display Header" as="textarea" value={state.displayheader}  aria-label="With textarea" onChange={changedisplayheader}/> */}

                <Switch onChange={changedisplayheader} checked={state.displayheader} />



            </InputGroup>
            {!state.displayheader ?
                <div className="sitetext-font top-line why_pvc_head"> Details will Hidden. Change the Display option</div>

                : null
            }
            <div className="sitetext-font top-line why_pvc_head"> Display Details Settings</div>

            <InputGroup
                // as={Col} 
                className=" header-content"
            >
                <label htmlFor="Details" className={screenstyle}>Light Background</label>
                <Switch onChange={changelightBg} checked={state.lightBg} />
                {/* <label htmlFor="Details" className={screenstyle}>Light Text</label>
                <Switch onChange={changelightText} checked={state.lightText} /> */}
                {/* <label htmlFor="Details" className={screenstyle}>Light Text Description</label>
                <Switch onChange={changelightTextDesc} checked={state.lightTextDesc} /> */}
                {/* <Switch onChange={changedisplayheader} checked={state.displayheader} /> */}
                <label htmlFor="Details" className={screenstyle}>Image Count</label> 
                <Dropdown options={imgoptions} value={state.imgcount} placeholder="Select an option" onChange={changeimgcount} />
                <label htmlFor="Details" className={screenstyle}>Home Screen Display</label> 
                <Dropdown options={imgdisoptions} value={state.imgs} placeholder="Select an option" onChange={changeimgdisp} />
                <label htmlFor="Details" className={screenstyle}>Title Image</label>
                <Dropdown options={optarrs} value={headti} placeholder="Select an option" onChange={changetitleimage} />
                <label htmlFor="Details" className={screenstyle}>Autoplay</label>
                <Switch onChange={changeautoplay} checked={state.autoplay} />

            </InputGroup>
            <div className="top-line">
                {props.screen == 'create' ?
                    <Button className="new-but-sty" onClick={insertHandler} variant="outline-primary">Add Header Details</Button>
                    :
                    <Button className="new-but-sty" onClick={updateHandler} variant="outline-primary">Update Header Details</Button>
                }
            </div>
            <div className={props.lightBg === 'true' ? "photo-desc-lable photo-desc white-text-label" : "photo-desc-lable photo-desc "}>{state.label}</div>

            <div className={props.lightTextDesc === 'true' ? "photo-desc white-text-desc " : "photo-desc   "}>{state.title}</div>
            {/* </ScrollToTop> */}
        </>
    );
}

export default HeaderDetails;
