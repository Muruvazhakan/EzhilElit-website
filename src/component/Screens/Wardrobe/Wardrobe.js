import React,{useEffect} from 'react'
import MainTemplate from '../../MainScreenComponent/MainTemplate';
import {Wardrobe} from '../../Datas/Datas';
 const Cupboard = () => {    
    return (
        <>
            <MainTemplate {...Wardrobe}/>            
        </>
    )
}
export default Cupboard;
