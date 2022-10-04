import React, { useEffect, useState } from 'react'
import InnerComponent from '../../MainComponent/InnerComponent/InnerComponent';
import { useLocation } from "react-router-dom";
// import queryString from 'query-string';
import * as Datas from '../../Datas/Datas';
import RubberBand from 'react-reveal/RubberBand';
import NoData from '../NoData/NoData';
import MainTemplate from '../../MainScreenComponent/MainTemplate';
const SelectedSubHeader = (props) => {


    const location = useLocation();
    var last = '';
    let allheadercomponent = [];
    useEffect(() => {
        console.log("SelectedHeader selected");

        console.log(props);
        // console.log('props scren ');
        // console.log(props);
        const encrypted_text = crypt("salt", "login");
        localStorage.setItem('useredit', encrypted_text);
        last = location.pathname.substring(location.pathname.lastIndexOf("=") + 1, location.pathname.length);
        console.log(' location.selectedtitle ' + last);
        if (last) {
            // window.location.href = '/';
            fetchdetails(last);
        }
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
        urlname: location.pathname.substring(location.pathname.lastIndexOf("=") + 1, location.pathname.length),
        selectedtheadercomponent: location.selectedtheadercomponent ? location.selectedtheadercomponent : null,
        selectedtitle: location.selectedtitle ? location.selectedtitle : null,
        load: false,
        useredit: props.location.useredit ? props.location.useredit : false,
        allheadercomponent: [],
        useredits: localStorage.getItem('useredit'),
        user_display: '',
        screen: 'home'
    };
    const [state, setstate] = useState(initial);

    const fetchdetails = (last) => {
        console.log("fetchdetails from SelectedHeader " + last);

        fetch(Datas.Image_Count,
            {
                // mode: 'no-cors',
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                }, body: JSON.stringify({
                    // we will pass our input data to server
                    userlogin: 'yes',
                    subheadername: last
                })
            }
        ).then(res => res.json()).then(res => {
            console.log("res SelectedHeader");
            console.log(res);
            
            setstate({
                ...state,
                selectedtheadercomponent: res,
                selectedtitle: last,
                load: true,

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
    return (
        <>
            <RubberBand delay={500}>
                {state.load && state.selectedtheadercomponent ?
                  
                    <>
                        {/* {state.selectedtheadercomponent.map((i, index) => (
                            <div key={index} >
                               <MainTemplate {...i} screenname={state.selectedtitle} screen={'SubScreen'}/>
                            </div>
                        ))} */}
                        
                        <InnerComponent selectedtitle={state.urlname} 
                    selectedtheadercomponent={state.selectedtheadercomponent} screen={'SubDetails'}/>
                    </>
                    : <NoData />
                }
            </RubberBand>
        </>
    )
}

export default SelectedSubHeader
