import React from 'react';
import './OurWork.css';
import * as Datas from '../../Datas/Datas';
import OurWorkTemp from './OurWorkTemp';
const OurWork = (props) => {
    return (
        <>       
         <div className="top-line ">Our Work</div>
         <OurWorkTemp {...Datas.OurWork}/> 
        </>
    )
}

export default OurWork