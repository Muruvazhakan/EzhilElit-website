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
import MainGallery from '../MainGallery/MainGallery';
const SelectedHeader = (props) => {


    const location = useLocation();
    var last = '';
    let allheadercomponent = [];
    useEffect(() => {
        // console.log("SelectedHeader selected");

        // console.log(props);
        // console.log('props scren ');
        // console.log(props);
        last = location.pathname.substring(location.pathname.lastIndexOf("=") + 1, location.pathname.length);
        // console.log(' location.selectedtitle ' + last);
        if (Datas.isbackendconnect == "Yes")
        {
            fetchOffline(last);
            fetchdetails(last);
        }
            
        else {
            fetchOffline(last);
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const initial = {
        urlname: location.pathname.substring(location.pathname.lastIndexOf("=") + 1, location.pathname.length),
        selectedtheadercomponent: '',
        selectedtitle: location.selectedtitle ? location.selectedtitle : null,
        load: false,
        useredit: props.location.useredit ? props.location.useredit : false,
        allheadercomponent: [],
        useredits: localStorage.getItem('useredit'),
        user_display: '',
    };
    const [state, setstate] = useState(initial);

    const fetchOffline = (last) =>{

        let filterdata = Datas.MyServices.filter((myservice)=>{
            return myservice.screenname == last
        })
        let datas=true;
            if(filterdata.length == 0)
            {
                
                datas=false;
            }

        // console.log("filterdata is :");
        // console.log(filterdata[0]);
        setstate({
            ...state,
            load: true,
            selectedtheadercomponent: filterdata[0].types,
            selectedtitle: filterdata[0].alt,
            screenname: filterdata[0].screenname,
            load: true,
            data:datas,
        })
        // console.log(state.selectedtheadercomponent);
    }
    const fetchdetails = (last) => {
        // console.log("fetchdetails from SelectedHeader " + last + "     " + Datas.getHeaderDetailsUrl);
        const selectedhearter = `${Datas.getHeaderDetailsUrl}/${last}`;
        fetch(selectedhearter,
            {
                // mode: 'no-cors',
                method: 'get',
                // header: {
                //     'Accept': 'application/json',
                //     'Content-type': 'application/json',
                // }, body: JSON.stringify({
                //     // we will pass our input data to server
                //     userlogin: 'yes',
                //     headername: last,
                //     type: 'get'
                // })
            }
        ).then(res => res.json()).then(res => {
            // console.log("res SelectedHeader");
            // console.log(res);
            // console.log(res.length +  ' res.length ');
            let datas=true;
            if(res === 'No Data' || res.length <1)
            {

                 setstate({
                    ...state,
                   
                    load: false,
                  
                })
              
            }
            else
            {
                setstate({
                    ...state,
                    selectedtheadercomponent: res[0].types,
                    selectedtitle: res[0].alt,
                    screenname: res[0].screenname,
                    load: true,
                    data:datas
                })
            }
           
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
                {state.load && state.selectedtheadercomponent && state.data ?
                    // <InnerComponent selectedtitle={state.urlname} 
                    // selectedtheadercomponent={state.selectedtheadercomponent} />
                    <>
                     {<div className='screentitle'>{state.selectedtitle} </div>}
                        {state.selectedtheadercomponent.map((i, index) => (
                            <div key={index} >
                               <MainTemplate {...i} screenname={state.screenname} screenTitle={state.selectedtitle} screen={'SubScreen'}/>
                            </div>
                        ))}
                    </>
                    : <NoData />
                }
                  <>
                {state.useredits === '66656d6364' ?
                    <CreateSubHeaderDetails />
                    :null}
                </>
            </RubberBand>

          <MainGallery />
        </>
    )
}

export default SelectedHeader
