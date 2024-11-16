import React, { useEffect, useState } from 'react';
import * as Datas from '../Datas/Datas';
// import styled from 'styled-components/macro';
// import Img from '../../assest/jrlogo.jpg';

// import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
// import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import './NavigationBar.css';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import {  animateScroll as scroll } from 'react-scroll';
import {
  Link
} from "react-router-dom";
import ContactUS from '../PopUpForm/ContactUS';
import Spinner from '../Spinner/Spinner';
// const logos = require('../../assest/jrent1.png'); 
// const Logoname = styled.section`
//   background-image: url(${logos});
//   height: 200px;
//   width: 20%;
// `;

const NavigationBar = () => {
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const closeMobileMenu = () => setClick(false);
  useEffect(() => {
    showButton();
    fetchdetails();
    window.addEventListener('resize', showButton);
    return (
      window.removeEventListener('resize', showButton)
    )

  }, []);

  const initialState = {
    menuflag: false,
    load:false,
    allheadercomponent: Datas.MenuItem,
    useredits:localStorage.getItem('useredit'),
  }
  const [state, setState] = useState(initialState);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let ls;
  const fetchdetails = () => {
    // console.log("fetchdetails from MainComponent");
   ls = localStorage.getItem('useredit');

    // console.log('ls '+ls);
    let imgs;
    if (ls == '66656d6364') {
      imgs = 'all';
    }
    else {
      imgs = 'single';
    }

    if(Datas.isbackendconnect =="Yes") {
      // console.log(Datas.getMenudataUrl + " getMenudataUrl");
      fetch(Datas.getMenudataUrl,
        {
          // mode: 'no-cors',
          method: 'get',
        }
      ).then(res => res.json()).then(res => {
        // console.log("res NavBar values");
        // console.log(res);
        if (res == 'No Data' || res == 'Something Went Wrong') {
          setState({
            ...state,
            load: true,
            errorcode: res
          })
        }
        else if (ls != '66656d6364') {
          const arr2 = res.filter(d => d.user_display == '1');
          // setTimeout(() => {
          setState({
            ...state,
            allheadercomponent: arr2,
            load: true,
            data: true,
          })
          // }, 3000);
          // console.log(arr2);
        }
        else {
          setTimeout(() => {
            setState({
              ...state,
              allheadercomponent: res,
              load: true,
              data: true,
            })
          }, 3000);
        }
        //   console.log('after filter header$$$$$$');
        //   console.log(header);
  
  
        // allheadercomponent = res;
        // {
        //   state.allheadercomponent.map((i, index) => {
        //     console.log(i.topLine + " up " + index);
        //   })
        // }
        // console.log('all state1 MainComponent');
      }).catch((error) => {
        console.error(error+ " navbar issue");
      });
    }
    else{
      setState({
        ...state,
        allheadercomponent: Datas.MenuItem,
        load: true,
        data: true,
      })
    }
    // console.log(" allheadercomponent");
    // console.log(state.allheadercomponent);
    // fetchimagedetails();

  }

  // useEffect(() => {
  //   console.log("MenuItem" + MenuItem);
  //   console.log(MenuItem);
  // })
  // const menuHandler = () => {
  //   setState({
  //     ...state,
  //     menuflag: !state.menuflag,
  //   })
  // }

  const handleheaderClick = (item1,item2) => {

   
    // console.log(" headerName,headerdetails click" + headerName + headerdetails);
    console.log(item1,item2);
   if(item1!='/' && item2!='Home'){
    console.log(item1+ " not /");
    window.location.reload();
   }
  
  }
  const handleLogout = () => {
    localStorage.removeItem('useredit');
    alert('Logout Success')
    window.location.href = '/';
  }
  
//   if (!state.load) {
//     return <Spinner />
// }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className="navbar-container container ">

            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

              <h3
                // onClick={() => {
                //   scroll.scrollToTop()
                // }}
                className='logo-name'>
                <img className='logo' src={Datas.EELogo}
                  alt="EE_Logo"
                />
                Ezhil Elit</h3>

            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu  nav-active  active' : 'nav-menu '}>
              {/* {state.load ? 
              <> */}
                {state.allheadercomponent.map((item, index) => {
                  let pathnameurl='';
                   pathnameurl=  item.title=="Home"? "/"  :  `/screen=${item.url}` ;
                  console.log(pathnameurl + " pathnameurl ");
                  return (
                    <div className='nav-item  nav-active '
                     onClick={() => handleheaderClick(pathnameurl,item.title)} 
                    key={index}
                    >
                    {/* <li className='nav-item  nav-active '> */}
                      {/* this code was used for backend connected */}
                      {/* < Link className='nav-links' to={{ pathname: `/screen=${item.topLine}`, }}   
                        duration={1000} activeClass="nav-active" spy={true} offset={-50}
                        smooth 
                        onClick={closeMobileMenu}
                        >
                          {item.alt}
                        </Link> */} 
                     
                        < Link className='nav-links' to={ { pathname: pathnameurl }} key={pathnameurl}
                        duration={1000} activeClass="nav-active" spy={true} offset={-50}
                        smooth 
                        onClick={closeMobileMenu}
                        >
                          {item.title}
                         </Link>
                      
                      {/* < a className='nav-links' href={item.url} 
                    onClick={closeMobileMenu}
                    >{item.title}</a> */}
                    {/* </li> */}
                    </div>
                  )
                })}
               
                 <li onClick={closeMobileMenu} 
                 className={window.innerWidth <= 1360 ? ' nav-active ' : ' nav-active'}
              // 'nav-item  '
              >
                <ContactUS />
              </li>
             
              {/* </>
              : null } */}
             
              <div className='nav-item menu-icon2' onClick={handleClick}>
                {click ? <FaTimes size="40px" /> : <FaBars />}
              </div>
              {state.useredits === '66656d6364' ?
                  <div className='nav-item nav-links' onClick={handleLogout}>Logout </div> : null
                }
            </ul>

            {/* 
        {state.menuflag ?
          <div className="sidebar">
            <ul className="sidebarList">
              {MenuItem.map((item, index) => {
                return (
                  <li key={index} className="row" onClick={() => {
                    window.location.pathname = item.url
                  }}>
                    {item.display !== "a" ?
                      // < a 
                      // // className="row"
                      // className={item.cName}

                      // href={item.url}>{item.title}</a>
                      <div>{item.title}</div>
                      : null}
                  </li>
                )
              })}
            </ul>
          </div>
          : null} */}


          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavigationBar;
