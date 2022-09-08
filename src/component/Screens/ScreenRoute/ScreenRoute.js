import React from 'react';
import * as Datas from '../../Datas/Datas';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // useParams,
    // Link,
    MemoryRouter
} from "react-router-dom";
import Footer from '../Footer/Footer';
import MainScreen from '../../MainScreenComponent/MainScreen';
import NavigationBar from '../../Navigation/NavigationBar';
// import EzhilAccessories from '../SubScreen/EzhilAccessories/EzhilAccessories';

import Flash from 'react-reveal/Flash';
import Goup from '../../Goup/Goup';
import FloatingWhatsApp from 'react-floating-whatsapp';
import StyleTemplate from '../StyleTemplate/StyleTemplate';

const SareeDrapping = () => {
    return (
        <>      
        <StyleTemplate types={Datas.SareeDrapping}  displaytype="0"/>
        </>
    )
};

const EzhilAccessories = () => {
    return (
        <>
         <StyleTemplate types={Datas.EzhilAccessories} displaytype="3"/>
        </>
    )
};
const Hairstyle = (props) => {
    return (
        <>            
            <StyleTemplate types={Datas.Hairstyle} displaytype="1"/>
        </>
    )
};

const Makeup = (props) => {
    return (
        <>            
            <StyleTemplate types={Datas.BridalMakeup}  displaytype="0"/>
        </>
    )
};

const ScreenRoute = (props) => {
    return (

        <MemoryRouter>
            <Router>
                <NavigationBar />
                <Switch>
                    {/* <Route path='/' exact component={ScreenRoute} />    */}
                    <Route exact path='/' component={MainScreen} />
                    {/* <Route path='/contact' component={Contact} />
             <Route path='/about' component={About} />  */}
                    <Route path="/BridalMakeup" component={Makeup} />
                    <Route path="/SareeDrapping" component={SareeDrapping} />
                    <Route path="/Hairstyle" component={Hairstyle} />
                    <Route path="/EzhilAccessories" component={EzhilAccessories} />
                  
                </Switch>
               
                <Flash delay={3200}>
                    <section id="ContactUs">
                        <Footer />
                    </section>
                </Flash>
                <FloatingWhatsApp phoneNumber={Datas.whatsapp[0].phno}
                    className="Floating-style"
                    accountName={Datas.whatsapp[0].accountName}
                    avatar={Datas.whatsapp[0].Url}
                    allowClickAway />
                     <Goup />
            </Router>

        </MemoryRouter>

    )
}

export default ScreenRoute