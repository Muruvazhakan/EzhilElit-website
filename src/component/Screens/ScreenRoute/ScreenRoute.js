import React from 'react';
import * as Datas from '../../Datas/Datas';
import {
    // BrowserRouter as Router,
    Switch,
    Route,
    // useParams,
    // Link,
    MemoryRouter, HashRouter as Router
} from "react-router-dom";
import Footer from '../Footer/Footer';
import MainScreen from '../../MainScreenComponent/MainScreen';
import NavigationBar from '../../Navigation/NavigationBar';
// import EzhilAccessories from '../SubScreen/EzhilAccessories/EzhilAccessories';

import Flash from 'react-reveal/Flash';
import Goup from '../../Goup/Goup';
import FloatingWhatsApp from 'react-floating-whatsapp';
import StyleTemplate from '../StyleTemplate/StyleTemplate';
import Login from '../Login/Login';
import NoData from '../NoData/NoData';
import Signup from '../Signup/Signup';
import GoogleReview from '../../GoogleReview/GoogleReview';
import SelectedHeader from '../SelectedHeader/SelectedHeader';
import SelectedSubHeader from '../SelectedSubHeader/SelectedSubHeader';
// const SareeDrapping = () => {
//     return (
//         <>
//             <StyleTemplate types={Datas.SareeDrapping} displaytype="0" />
//         </>
//     )
// };

// const EzhilAccessories = () => {
//     return (
//         <>
//             <StyleTemplate types={Datas.EzhilAccessories} displaytype="3" />
//         </>
//     )
// };
// const Hairstyle = (props) => {
//     return (
//         <>
//             <StyleTemplate types={Datas.Hairstyle} displaytype="1" />
//         </>
//     )
// };

// const Makeup = (props) => {
//     return (
//         <>
//             <StyleTemplate types={Datas.BridalMakeup} displaytype="0" />
//         </>
//     )
// };

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import BlogListDetails from '../../Blog/BlogDetails/BlogListDetails';
import HomeBlog from '../../Blog/HomeBlog/HomeBlog';
import SingleBlog from '../../Blog/BlogDetails/SingleBlog';
import CreateBlogDetails from '../../Blog/BlogDetails/CreateBlogDetails/CreateBlogDetails';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
  console.log = () =>{};
}
else{
  console.log(process.env );
}
const ScreenRoute = (props) => {
    return (

        <MemoryRouter>
            <Router>
                <NavigationBar />
                <Switch>
                    {/* <Route path='/' exact component={ScreenRoute} />    */}
                    <Route exact path='/' component={MainScreen} />
                    <Route path='/blog' exact component={HomeBlog} />
                    <Route path='/newblog' exact component={CreateBlogDetails} />
                    <Route path='/blog/:blogid'  component={SingleBlog} />
                    {/* <Route path='/contact' component={Contact} />
             <Route path='/about' component={About} />  */}
                    {/* <Route path="/BridalMakeup" component={Makeup} />
                    <Route path="/SareeDrapping" component={SareeDrapping} />
                    <Route path="/Hairstyle" component={Hairstyle} />
                    <Route path="/EzhilAccessories" component={EzhilAccessories} /> */}
                    <Route path='/Login' exact component={Login} />
                   
                    <Route path='/Signup' exact component={Signup} />
                    <Route path='/screen=:screen&sub=:sub' component={SelectedSubHeader} />
                    <Route path='/screen=:screen' component={SelectedHeader} />
                    <Route path='/reviews' component={GoogleReview} />
                    <Route path='/' component={NoData} />
                </Switch>

                <Flash delay={3200}>
                    <section id="ContactUs">
                        <Footer />
                    </section>
                </Flash>
                <div className="Floating-style">
                    <FloatingWhatsApp phoneNumber={Datas.whatsapp[0].phno}

                        accountName={Datas.whatsapp[0].accountName}
                        avatar={Datas.whatsapp[0].Url}
                        allowClickAway />

                    <Goup />
                </div>
            </Router>

        </MemoryRouter>

    )
}

export default ScreenRoute