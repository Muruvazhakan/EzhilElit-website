import React, { useState } from 'react';
import './AboutMe.css';

import Card from '../../Card/Card';
import * as Datas from '../../Datas/Datas';
import { Link } from 'react-router-dom';
import {
    FaInstagram,
    FaYoutube,
    FaSearchLocation
} from 'react-icons/fa';
import { MdCall, MdMailOutline } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';




const AboutMe = (props) => {

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
                contact_number_flag: !state.contact_number_flag,
              
            })
        }
        setState({
            ...state,
            contactflag: !state.contactflag,
            
        })
    };

    const handlemail = async () => {
        var clipboard = navigator.clipboard;
        let subject = 'Order%20Request';
        let body = 'Hi,%0A We are trying to contact you,%0A Please contact Me  %0A Name: \'Your Contact Number\' %0A Number \'Your Contact Number\'%0A Location: \'Your Location\' %0A Date: \'Event Date\' ';
        if (clipboard === undefined) {
            console.log('clipboard is undefined');
            window.open(`mailto:${Datas.mail_id}?subject=${subject}&body=${body}`);
        } else {
            clipboard.writeText(Datas.mail_id).then(function () {
                console.log('Copied to clipboard successfully!');

            }, function () {
                console.error('Unable to write to clipboard. :-(');
            });
        }
        // textField.innerText = 'foo bar baz';
        toast("Mail Id is Copied!", {
            position: "top-center",
            // autoClose: 5000,
            // hideProgressBar: false,
            // closeOnClick: true,
            pauseOnHover: true,
            // draggable: true,
            // progress: undefined, 
        });


        // alert("Copied")

        setState({
            ...state,
            mailflag: !state.mailflag,            
        })
    };

    return (
        <div className="about-content">
            <div className="row contents">

                <Card className="about-me-card" screensize="big">
                    <div className="row">
                        <div className="column about-text" >
                            <div className="about-text">
                                <div className="about-me-title">ABOUT ME</div>
                                {/* <div className="dots-style">
             ...... </div>   */}
                                <div className="sub-subscreen sub-topic">
                                    {/* I have been a  */}
                                    Makeup artist at Chennai 
                                {/* for 2 years. */}

                                </div>
                                <div className="sub-subscreen sub-topic">
                                    Get dolledup on your Big Day.
                                </div>
                                <div className="sub-subscreen about-name">
                                    Kodhai Ezhil
                                </div>
                                <div className="sub-subscreen about-sign">
                                    MAKEUP ARTIST
                                </div>
                                {/* <div className="sub-subscreen">Get dolledup on your Big Day</div> */}
                                <div className="icon-sections">
                                    <Link
                                        className='social-icon-link'
                                        // to={Datas.mail_id}                 
                                        // target='_top'
                                        // aria-label='ContatNumber'
                                        onClick={() => handlecontact()}
                                    >
                                        <MdCall color='green' />

                                    </Link>
                                    <Link
                                        className='social-icon-link'
                                        // to={Datas.mail_id}                 
                                        // target='_top'
                                        // aria-label='Mail'
                                        onClick={() => handlemail()}
                                    >
                                        <MdMailOutline color={Datas.primaryblue} />

                                    </Link>

                                    <Link
                                        className='social-icon-link'
                                        to={Datas.Insta_link}
                                        target='_blank'
                                        aria-label='Instagram'
                                    >
                                        <FaInstagram color={Datas.primaryblue} />
                                    </Link>
                                    <Link
                                        className='social-icon-link'
                                        to=
                                        {Datas.Youtube_link}
                                        // {'//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'}

                                        target='_blank'
                                        aria-label='Youtube'
                                    >
                                        <FaYoutube color="#FF0000" />
                                    </Link>

                                   
                                </div>
                                
                            </div>
                            <div className="icon-sections">
                            {state.contactflag ?
                                        <div>
                                            {Datas.contact_number.map(num => (

                                                <div 
                                                // className="contact-number"
                                                >{num.Title}: {num.Number}</div>
                                            ))}
                                        </div>
                                        : null
                                    }
                                    {state.mailflag ?
                                        <div 
                                        // className="mail-id"
                                        >
                                            {Datas.mail_id}
                                        </div> : null}
                                        </div>
                        </div>

                       
                        <div className="SmallComp-form-cards title-card-content about-img">
                            <img className="img-size" src={`${Datas.my_img}`}
                                alt="Title"
                            />

                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default AboutMe