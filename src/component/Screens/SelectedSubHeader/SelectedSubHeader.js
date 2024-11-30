import React, { useEffect, useState } from 'react'
import InnerComponent from '../../MainComponent/InnerComponent/InnerComponent';
import { useLocation } from "react-router-dom";
// import queryString from 'query-string';
import * as Datas from '../../Datas/Datas';
import RubberBand from 'react-reveal/RubberBand';
import NoData from '../NoData/NoData';
import MainTemplate from '../../MainScreenComponent/MainTemplate';
import Spinner from '../../Spinner/Spinner';
import CreateSubHeaderDetails from '../../MainComponent/CreateComponent/CreateSubHeaderDetails';
import ImageComponent from '../../ImageComponent/ImageComponent';
const SelectedSubHeader = (props) => {


    const location = useLocation();
    var header='',last = '';
    let allheadercomponent = [];
    useEffect(() => {
        console.log("Selected SUB Header selected");

        console.log(props);
        // console.log('props scren ');
        console.log(props.match.params.screen);
        // const encrypted_text = crypt("salt", "login");
        // localStorage.setItem('useredit', encrypted_text);
        header = props.match.params.screen;
        last = props.match.params.sub;
        console.log(header +' location.selectedtitle ' + last );
        if (last) {
            // window.location.href = '/';
           
            if (Datas.isbackendconnect == "Yes"){
                fetchOffline(header,last);
                fetchdetails(header,last);
            }
               
            else {
                fetchOffline(header,last);
            }
            // fetchImagedetails(last);
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const crypt = (salt, text) => {
        const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
        const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

        return text
            .split("")
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join("");
    };
    const initial = {
        urlname:  props.match.params.sub,
        selectedtheadercomponent: location.selectedtheadercomponent ? location.selectedtheadercomponent : null,
        selectedtitle: props.match.params.screen ? props.match.params.screen : null,
        load: false,
        useredit: props.location.useredit ? props.location.useredit : false,
        allheadercomponent: [],
        useredits: localStorage.getItem('useredit'),
        user_display: '',
        screen: 'home',        
    };
    const initialimg = {        
        selectedtheadercomponent: props.match.params.screen ? props.match.params.screen : null,
       
    };
    const [state, setstate] = useState(initial);
    const [imgstate, imgsetstate] = useState(initialimg);

    const fetchOffline = (header,last) =>{

        let selectheaderscreen = Datas.MyServices.filter((myservice)=>{
            return myservice.screenname == header
        });

        if(selectheaderscreen.length>0) {
            let filterdataarr= selectheaderscreen[0].types.filter((subservice)=>{
                return subservice.subscreenname == last
            })
    
            console.log("filterdata is  ");
            console.log(filterdataarr);

            setstate({
                ...state,
                selectedtsubheadercomponent:filterdataarr.length>0 && filterdataarr ,
                selectedtitle: header,
                load: true,
            });
    
            imgsetstate({
                ...imgstate,
                selectedtheadercomponent: selectheaderscreen,
                // selectedtitle: last,
                // load: true,
            });

            console.log("selectheaderscreen is..  ");
            console.log(imgsetstate.selectedtheadercomponent,selectheaderscreen[0]);
        }
        
    }
    const fetchdetails = (header,last) => {
        // console.log("fetchdetails from SelectedHeader " + last);
        
        const selectedSubhearter = `${Datas.getHeaderDetailsUrl}/${header}`;
        console.log("fetchdetails from SelectedHeader " + last + "     " + selectedSubhearter);
        let userlogin= state.useredits  === '66656d6364' ?'yes':'no'; 
        fetch(selectedSubhearter,
            {
                // mode: 'no-cors',
                method: 'get',
                // header: {
                //     'Accept': 'application/json',
                //     'Content-type': 'application/json',
                // }, body: JSON.stringify({
                //     // we will pass our input data to server
                //     userlogin: userlogin,
                //     subheadername: last,
                //     request:'get',
                //     content:'subheader'
                // })
            }
        ).then(res => res.json()).then(res => {
            console.log("res SelectedHeader");
            console.log(res);
            
            if(res === 'No Data' || res.length <1)
                {
    
                     setstate({
                        ...state,
                       
                        load: false,
                      
                    })
                  
                }
                else {
                    imgsetstate({
                        ...imgstate,
                        selectedtheadercomponent: res,
                        // selectedtitle: last,
                        // load: true,
                    });
                    
                    let filterdataarr= res[0].types.filter((subservice)=>{
                        return subservice.subscreenname == last
                    })
            
                    console.log("filterdata is  ");
                    console.log(filterdataarr);
        
                    setstate({
                        ...state,
                        selectedtsubheadercomponent:filterdataarr.length>0 && filterdataarr,
                        selectedtitle: header,
                        load: true,
                    });
            
                   
        
                    console.log("selectheaderscreen is..  ");
                    console.log(imgsetstate.selectedtheadercomponent,res);
                   
                }
                

            //   console.log('state.user_display' + state.user_display);

        }).catch((error) => {
            console.error(error);
        })
        // fetchImagedetails(last); it was managed by above

    }
    const fetchImagedetails = (last) => {
        // console.log("fetchdetails from SelectedHeader " + last);
        let userlogin= state.useredits  === '66656d6364' ?'yes':'no'; 
        fetch(Datas.Image_Count,
            {
                // mode: 'no-cors',
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                }, body: JSON.stringify({
                    // we will pass our input data to server
                    userlogin: userlogin,
                    subheadername: last,
                    request:'get',
                    content:'image'
                })
            }
        ).then(res => res.json()).then(res => {
            // console.log("res SelectedHeader");
            // console.log(res);
            
            imgsetstate({
                ...imgstate,
                selectedtheadercomponent: res,
                // selectedtitle: last,
                // load: true,
            })
            //   console.log('state.user_display' + state.user_display);
        }).catch((error) => {
            console.error(error);
        })
        // fetchimagedetails();

    }
    // if(state.useredits !== '66656d6364' && state.user_display !='1' && location.screen!=="home" )
    //     {
    //         return <NoData />
    //     }
    if (!state.load) {
        return <Spinner />
    }
    return (
        <>
            <RubberBand delay={500}>
                {state.load && imgstate.selectedtheadercomponent
                 && state.selectedtsubheadercomponent
                 ?             
                    <>
                        {/* {state.selectedtheadercomponent.map((i, index) => (
                            <div key={index} >
                               <MainTemplate {...i} screenname={state.selectedtitle} screen={'SubScreen'}/>
                            </div>
                        ))} */}
                        
                        <InnerComponent selectedtitle={state.urlname} 
                    selectedtheadercomponent={imgstate.selectedtheadercomponent} 
                    selectedtsubheadercomponent ={state.selectedtsubheadercomponent}
                    screen={'SubDetails'}/>
                    </>
                    : <NoData />
                }
                <>
                {state.useredits === '66656d6364' && state.selectedtsubheadercomponent ?
                    <ImageComponent screen={'create'} 
                    data={state.selectedtsubheadercomponent} topline={state.selectedtsubheadercomponent.topLine} headerid={state.selectedtsubheadercomponent.Header_Details_id}
                   
                    />
                    :null}
                </>
            </RubberBand>
        </>
    )
}

export default SelectedSubHeader
