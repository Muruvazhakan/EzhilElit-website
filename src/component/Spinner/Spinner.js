import React,{useState,CSSProperties} from 'react'
import './Spinner.css';
// import * as Datas from '../../Datas/Datas';
import MoonLoader from "react-spinners/MoonLoader";

const override: CSSProperties = {
    display: "block",
    margin: "10px auto",
    borderColor: "blue",
  };
 const Spinner = () => {    
    let [color, setColor] = useState("rgb(54, 215, 183)");
    return (
        <div className="spinner-style">
           <MoonLoader color={color} cssOverride={override} size={50}/>     
        </div>
    )
}
export default Spinner;
