import React, { useState } from 'react';
// import { useSprings, animated, interpolate } from 'react-spring';
// import { useGesture } from 'react-use-gesture';
import HeaderImage from './HeaderImage';
import MainTemplate from './MainTemplate';
import * as Datas from '../Datas/Datas';
import Footer from '../Screens/Footer/Footer';
// import ContactUS from '../PopUpForm/ContactUS';
import './MainScreen.css'
// import CardSwipe from '../CardSwipe/CardSwipe';
import SmallComponent from '../Screens/SmallComponent/SmallComponent';
import TitleCard from '../TitleCard/TitleCard';
// import e from 'cors';
import Why_PVC from '../PVC/Why_PVC';
import My_Site from '../PVC/My_Site';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import * as animate from 'react-reveal/';

import Flash from 'react-reveal/Flash';
import FloatingWhatsApp from 'react-floating-whatsapp';
import 'react-floating-whatsapp/dist/index.css'
import Ezhil_Accss from '../Screens/Ezhil_Accss/Ezhil_Accss';
import AboutMe from '../Screens/AboutMe/AboutMe';
import MainGallery from '../Screens/MainGallery/MainGallery';




export const MainScreen = () => {

    const initialval = {

        Modularkitchenflag: false,
        Cupboardflag: false,
        Showcasesflag: false,
        // Modularkitchen:false,

    };
    const [state, setState] = useState(initialval);
    const handletitleclick = (props) => {
        console.log("props " + props);
        if (props === "modularkitchen") {
            setState({
                ...state,
                Cupboardflag: false,
                Showcasesflag: false,
                Modularkitchenflag: !state.Modularkitchenflag
            })
        }
        if (props === "Cupboard") {
            setState({
                ...state,
                Modularkitchenflag: false,
                Showcasesflag: false,
                Cupboardflag: !state.Cupboardflag
            })
        }
        if (props === "Showcases") {
            setState({
                ...state,
                Modularkitchenflag: false,
                Cupboardflag: false,
                Showcasesflag: !state.Showcasesflag
            })
        }
    }
    return (
        <>

            <animate.Zoom>
                <section id="MainScreen">

                    <HeaderImage />
                </section>
            </animate.Zoom>
            <animate.LightSpeed left delay={1500}>
                <AboutMe />
            </animate.LightSpeed>
            {/* <animate.Flip left delay={1000}></animate.Flip> */}

            <section id="BridalMakeup">

                <MainTemplate {...Datas.BridalMakeup} />

            </section>

            <section id="Hairstyle">

                <MainTemplate {...Datas.Hairstyle} />

            </section>
            <section id="SareeDrapping" >

                <MainTemplate {...Datas.SareeDrapping} />


            </section>

            <section id="SpecialOccation" >

                <MainTemplate {...Datas.SpecialOccation} screenname="Special" />


            </section>



            <Flash delay={3200}>
                <section id="EzhilAccessories" >
                    {/* <Ezhil_Accss /> */}
                    <MainTemplate {...Datas.EzhilAccessories} screenname="Main" />


                </section>
            </Flash>
            <Flash delay={3200}>
                <section id="MainGallery" >

                    <MainGallery />


                </section>
            </Flash>

            {/* <section id="PvcDoor"> */}
            {/* <animate.LightSpeed left delay={2500}>
                <My_Site />
            </animate.LightSpeed> */}
            {/* <animate.Bounce right delay={1000}>
                <section id="SmallComponent">
                    <SmallComponent />
                </section>
            </animate.Bounce> */}
            {/* </section> */}
            {/* <animate.Zoom delay={500}>
                <Why_PVC />
            </animate.Zoom> */}
            {/* <Flash delay={3200}>
                <OurWork />
            </Flash>             */}
            {/* 
            <Flash delay={3200}>
                <section id="ContactUs">
                    <Footer />
                </section>
            </Flash> */}


            {/* <FloatingWhatsApp phoneNumber={Datas.whatsapp[0].phno}
                className="Floating-style"
                accountName={Datas.whatsapp[0].accountName}
                avatar={Datas.whatsapp[0].Url}
                allowClickAway /> */}

        </>
    )
}

export default MainScreen;
