
import React, { useEffect, useState } from "react";
import './Goup.css'
import {CgArrowUpO} from 'react-icons/cg';

 const  Goup = () =>{
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTops = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  const goimgs = () =>{
    return(
        <CgArrowUpO size={'20px'}/>
    )
}
  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTops}>          
          <CgArrowUpO className="styles_scroll-to-top"/>
        </div>}
       
    </div>
    
  );
};

export default Goup;