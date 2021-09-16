import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import * as Datas from '../Datas/Datas';
import validator from 'validator';
import './Form.css';
import Card from '../Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';
// const Background = styled.div`
//   // width: 100%;
//   // height: 100%;
//   // background: rgba(0, 0, 0, 0.8);
//   // position: right center sticky;
//   // display: flex;
//   // justify-content: center;
//   // align-items: center;

//   position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalWrapper = styled.div`
//   // width: 700px;
//   // height: 500px;
//   // box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   // background: #fff;
//   // color: #000;
//   // display: grid;
//   // grid-template-columns: 1fr 1fr;
//   // position: relative;
//   // z-index: 10;
//   // border-radius: 50px;

//   position: relative;
//     width: 100%;
//     padding: 32px;
//     max-width: 640px;
//     display: grid;
//     background-color: white;
//     grid-template-columns: 1fr 1fr;
//     border-radius: 32px;
//     color: black;
// `;

// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;

//   p {
//     margin-bottom: 1rem;
//   }

//   button {
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border: none;
//   }
// `;

// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `;


const Form = ({ showModal, setShowModal }) => {

  const initialState = {
    enteredUsername: '',
    enteredNumber: '',
    enteredEmailId: '',
    enteredDetails: '',
    errordetail: '',
    enteredDate:'',       
    contact_number_flag: true,
    displaywhat:false,
  };
  const modalRef = useRef();
  const [state, setState] = useState(initialState);
  const notify = (errors,types) =>
  { 
    if(types==="error")
    {
      toast.error("Invalid "+errors,{    
        position: "top-center",
        // autoClose: 5000,
        // hideProgressBar: false,
        // closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        // progress: undefined,        
    })

    }
    if(types==="succ")
    {
      // toast.success("Thanks for your Interest, We will contact you As Soon As Possible.",{    
        toast.error("Thanks for your Interest, We will contact you As Soon As Possible.",{    
        position: "top-center",
        // autoClose: 5000,
        // hideProgressBar: false,
        // closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        // progress: undefined,        
    })

    }
    
};
  const clietRequestHandler = ()=>{
    console.log("clietRequestHandler");
    fetch(Datas.Form_Url, {
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        // we will pass our input data to server
        mobile: state.enteredNumber,
        name: state.enteredUsername,
        comments: state.enteredDetails,  
        emailid:state.enteredEmailId,
        date:state.enteredDate,              
      })

    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson + " responseJson");
        //ToastAndroid.show(responseJson,ToastAndroid.LONG);

        if (responseJson !== "Added") 
        {
          console.log(" not Added");
          setState({
            ...state,
            errordetail: 'Something went wrong',
          })
        }
        else
        {
          console.log("Added");
          // alert("Thanks for your Interest, We will contact you As Soon As Possible.");
          // setState({
          //   ...state,
          //   enteredUsername: '',
          //   enteredNumber: '',
          //   enteredEmailId: '',
          //   enteredDetails: '',
          //   errordetail: '',
          //   enteredDate:'',
           
          // })
        }
        // notify('Success','succ');
        setShowModal(false);
      })  
      .catch((error) => {
        console.error(error);
      });
      

  }

  

  const addUserHandler = (event) => {  
    console.log("sub");
    event.preventDefault();
    if (state.enteredUsername.trim().length === 0 || state.enteredNumber.trim().length === 0) {
      setState({
        ...state,
        errordetail: 'User Name',
      });
      notify('User Name','error');
      return;
    }

    if (state.enteredNumber.trim().length !== 10) {
      setState({
        ...state,
        errordetail: 'Phone Number',        
      });
      notify('Phone Number','error');
      return;
    }
    // var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if (state.enteredEmailId.match(mailformat))
    // {
    // console.log("trueasda");
    // }
    // else{
    //   console.log("fale");
    // }
    if (!validator.isEmail(state.enteredEmailId)) {
      setState({
        ...state,
        errordetail: 'Email Id',
      })
      notify('Email Id','error');
      return;
    }
    // props.onAddUser(enteredUsername, enteredNumber);
    
    if(state.enteredDate !=='')
    {
    var now = new Date();
    var dt1 = Date.parse(state.enteredDate);
    var dt2=Date.parse(now);
    console.log("submit " +dt1+"  "+dt2);
    console.log(state.enteredDate+now);
    if (dt2 > dt1) {
      alert("Date must be in the future");
      setState({
        ...state,
        errordetail: 'Date',
      })
      notify('Date','error');
      return;
     }
    }
    notify('Success','succ');
    clietRequestHandler();    
    console.log(state );    
    setState({
      ...state,
      displaywhat:true,
    })
    console.log("submit state Success change");
  };

  const usernameChangeHandler = (event) => {
    setState({
      ...state,
      enteredUsername: event.target.value,
      errordetail: '',      
    });
    console.log(state.enteredUsername);

  };

  const clipboardatas = () =>{
    let number = 0;
    if (Datas.contact_number.length > 0) {
      if (state.contact_number_flag) {
        number = Datas.contact_number[0].Number;
        console.log(number);
      }
      else {
        number = Datas.contact_number[1].Number;
      }
    }

    var clipboard = navigator.clipboard;
    let conttext =`Our Number: ${number}`;
    if (clipboard === undefined) {
      console.log('clipboard is undefined');
      window.open(`tel:${number}`);      
    } else {
      clipboard.writeText(number).then(function () {
        console.log('Copied to clipboard successfully!');
        conttext = !state.contact_number_flag ? "Secondary Contact Number is Copied" : "Primay Contact Number is Copied";
      }, function () {
        console.error('Unable to write to clipboard. :-(');
      });
    }

    
    toast(`${conttext}`, {
      position: "top-center",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      // progress: undefined, 
    });

  }
  

  const dateChangeHandler = (event) => {
    setState({
      ...state,
      errordetail: '',
      enteredDate: event.target.value
    });
    console.log(state.enteredDate);
  }

  const detailsChangeHandler = (event) => {
    setState({
      ...state,
      errordetail: '',
      enteredDetails: event.target.value
    });
    console.log(state.enteredDetails);
  }
  const emailChangeHandler = (event) => {
    setState({
      ...state,
      errordetail: '',
      enteredEmailId: event.target.value
    });
    console.log(state.enteredEmailId);
  }

  const NumberChangeHandler = (event) => {
    setState({
      ...state,
      errordetail: '',
      enteredNumber: event.target.value
    });
    console.log(state.enteredNumber);

  };

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      console.log("Form");
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <>
          {/* <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={require('./modal.jpg')} alt='camera' />
              <ModalContent>
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Join Now</button>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background> */}
          <div className="popup" onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <div className="popup-inner" showModal={showModal}>
                <div className='close-btn' onClick={() => setShowModal(prev => !prev)}>
                  <AiOutlineCloseCircle size='25px' color='black' />
                </div>
                Lets Stay Connected
                <div 
                className="form-columns"
                >
                  {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
                  {/* <Card className="form-cards">
                    User Profile
                  </Card> */}
                  <Card className="form-cards">
                    <div className="form-Content">
                      <form className="form-add-details" onSubmit={addUserHandler}>                       
                        <div
                          className={`${state.errordetail === 'User Name' ? 'form-error' : ''
                            }`}
                        >
                          <label htmlFor="username" className="form-lable-styles">User Name</label>
                          <input
                            id="username"
                            type="text"
                            value={state.enteredUsername}
                            className="form-lable-styles"
                            onChange={usernameChangeHandler}
                          />
                          </div>

                          <div
                          className={`${state.errordetail === 'Phone Number' ? 'form-error' : ''
                            }`}
                        >
                          <label htmlFor="phoneNumber" className="form-lable-styles">Phone Number</label>
                        
                        <input
                          className="form-lable-styles"
                          id="PhoneNumber"
                          type="number"
                          // style={{color:'black',fontWeight:'bold'}}
                          value={state.enteredNumber}
                          onChange={NumberChangeHandler}
                        />
                        </div>

                        <div
                          className={`${state.errordetail === 'Email Id' ? 'form-error' : ''
                            }`}
                        >
                        <label htmlFor="emailId" className="form-lable-styles">Email Id</label>
                        <input
                          className="form-lable-styles"
                          id="emailId"
                          type="email"
                          // style={{color:'black',fontWeight:'bold'}}
                          value={state.enteredEmailId}
                          onChange={emailChangeHandler}
                        />
                        </div>

                        <div
                          className={`${state.errordetail === 'Date' ? 'form-error' : ''
                            }`}
                        >
                        <label htmlFor="dateid" className="form-lable-styles">Book your event date</label>
                        <input
                          className="form-lable-styles"
                          id="dateid"
                          type="date"
                          // style={{color:'black',fontWeight:'bold'}}
                          value={state.enteredDate}
                          onChange={dateChangeHandler}
                        />
                        </div>


                        <label htmlFor="Details" className="form-lable-styles">Your Comments</label>
                        <input
                          id="details"
                          type="text"
                          value={state.enteredDetails}
                          className="form-lable-styles"
                          onChange={detailsChangeHandler}
                        />
                        {/* <button type="submit" className="form-submit">Send</button> */}
                        {/* {state.displaywhat ?  */}
                        <div onClick={clipboardatas} className="Whats-app-but-sty">                         
                        {/* <WhatsappShareButton  title={"Name: "+state.enteredUsername} url={`Phone Number: ${state.enteredNumber} Email Id: ${state.enteredEmailId} Date: ${state.enteredDate} Details: ${state.enteredDetails}`}>
                          <WhatsappIcon logoFillColor="white" round={true} size='40px' ></WhatsappIcon>
                        </WhatsappShareButton> */}    
                             <ReactWhatsapp number={Datas.whatsapp[0].phno}
                            //  number="918428952208" 
                            //  message="Hello World!!!" 
                          message={`Phone Number: ${state.enteredNumber} Email Id: ${state.enteredEmailId} Date: ${state.enteredDate} Details: ${state.enteredDetails}`} 
                          >  
                           <ImWhatsapp size='25px' color='green' > 
                          </ImWhatsapp>
                          </ReactWhatsapp>                             
                        </div>                        
                            
                      </form>
                      {state.errordetail !== '' ?
                        <div className="form-error-msg">
                          Invalid {state.errordetail}
                        </div>
                        : null
                      }
                                       
                         
                    </div>
                                    
                  </Card>
                </div>
              </div>
            </animated.div>
          </div>
          <ToastContainer />
        </>
      ) : null}
    </>
  )
}

export default Form;
