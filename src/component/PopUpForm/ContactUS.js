import React, { useState } from 'react'
import Form from './Form';
import styled from 'styled-components';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link} from 'react-scroll';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
//   height: 100vh;
`;
// const FormContainer = styled.div`
// display: "flex";
//  flexWrap: "wrap"; 
// position: "absolute";
//  top: 0; left: 0 ; 
//  height: "100%", width: "100%";
//   alignItems: "center";
// // alignItems: 'center';
// // position: right center ;
// `;


const ContactUS = () => {

    const [showForm, setShowForm] = useState(false);

    const popUpHandler=() =>{
        setShowForm(prev => !prev)

    }

    return (
        <>
        <Container>
        < Link 
        className='nav-links'
         to="ContactUs"
                    smooth  duration={1000} activeClass="nav-active" spy={true} offset={-70}
                     >
        <div onClick={()=>{popUpHandler()}}>
            Contact Us
        </div>
        </Link>
        {/* <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup> */}
  {/* <FormContainer> */}
        <Form showModal={showForm} setShowModal={setShowForm} />
        {/* </FormContainer> */}

        </Container>
        </>
    )
}

export default ContactUS
