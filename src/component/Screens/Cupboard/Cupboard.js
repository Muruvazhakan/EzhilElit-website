import React,{useEffect} from 'react'
import MainTemplate from '../../MainScreenComponent/MainTemplate';
import {Cupboarddata} from '../../Datas/Datas';
import img from '../../../assest/jr1.png';
 const Cupboard = () => {
    useEffect(()=>{
        console.log("Cupboard "+img);
    })
    return (
        <div>
            <MainTemplate {...Cupboarddata}/>
            
        </div>
    )
}
export default Cupboard;
