import React, { useState }  from 'react';
import './SubScreen.css';
// import { MdCall } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as Datas from '../../../component/Datas/Datas';
import { ToastContainer, toast } from 'react-toastify';
import AboutMe from '../AboutMe/AboutMe';
const SubScreen = (props) => {
    const initial = {
        contactflag: false,
        mailflag: false,
        contact_number_flag: true,
      };
      const [state, setState] = useState(initial);
    const handlecontact = () => {
        let number = 0;
        if (Datas.contact_number.length > 0) {
          if (state.contact_number_flag) {
            number = Datas.contact_number[0].Number;
            console.log(number);
          }
          else {
            number = Datas.contact_number[1].Number;
          }
        }
    
        var clipboard = navigator.clipboard;
        if (clipboard === undefined) {
          console.log('clipboard is undefined');
          window.open(`tel:${number}`);
        } else {
          clipboard.writeText(number).then(function () {
            console.log('Copied to clipboard successfully!');
    
          }, function () {
            console.error('Unable to write to clipboard. :-(');
          });
        }
        let conttext = !state.contact_number_flag ? "Secondary Contact Number is Copied" : "Primay Contact Number is Copied";
        toast(`${conttext}`, {
          position: "top-center",
          // autoClose: 5000,
          // hideProgressBar: false,
          // closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: undefined, 
        });
        if (Datas.contact_number.length > 1) {
          setState({
            ...state,        
            contact_number_flag: !state.contact_number_flag
          })
        }
        setState({
          ...state,
          contactflag: !state.contactflag,      
        })
      };

    return (
        <>       
      <section id="#Hairstyle" >
          <div className="top-line tile-card-line subscreen">
            <div className="title-subscreen">Ezhil Elit</div>  
           
            <div className="sub-subscreen">Get dolledup on your Big Day</div>     
            <div className="sub-subscreen-small">Monday to Sunday 9am to 9pm</div>    
            <div className="sub-subscreen-small"> Call us @   
            <Link
                  className='sub-subscreen-small'
                  // to={Datas.mail_id}                 
                  // target='_top'
                  // aria-label='ContatNumber'
                  onClick={() => handlecontact()}
                >
                   {/* <MdCall color='green'  className='sub-subscreen-icon' /> */}
                   {Datas.contact_number[0].Number}
                </Link>
             
                </div> 
            </div>
            
            <ToastContainer />
            </section>
        </>
    )
}

export default SubScreen
