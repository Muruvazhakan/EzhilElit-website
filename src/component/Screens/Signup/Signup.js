import React, { useEffect, useState } from 'react'
import '../Login/Login.css';
import * as Datas from '../../Datas/Datas';
import Card from '../../Card/Card';
import validator from 'validator';


const Signup = () => {
  useEffect(() => {
    // console.log("Signup ");
  }, [])
  const initialval = {
    name: '',
    emailid: '',
    password: '',
    confirmpassword: '',
    mobile: '',
    passcode:''
  };

  const [state, setState] = useState(initialval);
  const submit = (e) => {
    e.preventDefault();
    const encrypted_pass = crypt("salt", state.password);
      // console.log("state.password "+state.password+" en: "+encrypted_pass);
    
    if (state.name.length == 0 || state.password.length == 0 || state.confirmpassword.length == 0 || state.emailid.length == 0) {
      alert('Please enter all the details');
    }
    else if(state.passcode !=='ezhilelit')
    {
      alert('Enter correct Passcode');
    }
    else if (!validator.isEmail(state.emailid)) {
      alert('Not a valid Email');
    }
    else if (state.password != state.confirmpassword) {
      alert('Password is not matching');
    }
    else if (state.mobile.length != 10) {
      alert('Invalid Mobile number');
    }
    else {   
      
      insertData();
     
    }
  }
  const insertData = () => {
    const encrypted_pass = crypt("salt", state.password);
    fetch(Datas.User_Details,
      {
        // mode: 'no-cors',
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }, body: JSON.stringify({
          // we will pass our input data to server
          name: state.name,
          emailid:state.emailid,
          password: encrypted_pass,         
          mobile: state.mobile,
          type:'create'
        })
      }
    ).then(res => res.json()).then(res => {
      console.log("res insertData"+encrypted_pass);
      console.log(res);
      if(res =='1')
      {
        alert('User Created');
        window.location.href = '/Login';
      }
      else if(res =='2')
      {
        alert('Login Successful');
      }
      else if(res =='11')
      {
        alert('User Already registed');
      }
      else if(res =='12')
      {
        alert('User Not found');
      }
      else
      {
        alert('Something went Wrong');
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const crypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <div className=" login-container" >
        <Card className="SmallComp-form-cards  d-block w-100 login-container login-card-container" >
          <form >
            <h1>SignUp</h1>
            <div className="mb-3 component-styles">

              <input
                type="text"
                className="form-control"
                placeholder="Enter User Name"
                name='name'
                onChange={e => onChange(e)}
              />
            </div>
            <div className="mb-3 component-styles">

              <input
                type="email"
                className="form-control"
                placeholder="Email Id"
                name='emailid'
                onChange={e => onChange(e)}
              />
            </div>
            <div className="mb-3 component-styles">

              <input
                type="number"
                className="form-control"
                placeholder="Mobile Number"
                name='mobile'
                onChange={e => onChange(e)}
              />
            </div>
            <div className="mb-1 component-styles ">

              <input
                type="password"
                className="form-control "
                name='password'
                placeholder="Enter Password"
                onChange={e => onChange(e)}
              />
            </div>
            <div className="mb-1 component-styles ">

              <input
                type="password"
                className="form-control "
                name='confirmpassword'
                placeholder="Confirm Password"
                onChange={e => onChange(e)}
              />
            </div>
            <div className="mb-1 component-styles ">

              <input
                type="password"
                className="form-control "
                name='passcode'
                placeholder="Enter Passcode"
                onChange={e => onChange(e)}
              />
            </div>
            <div className="d-grid component-styles">
              <button type="submit" className="btn btn-primary" onClick={submit}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right component-styles">
              Have any account? <a href="/Login">Login?</a>
            </p>
            {/* <p className="forgot-password text-right component-styles">
                    Forgot <a href="#">password?</a>
                </p> */}
          </form>
        </Card>
      </div>
    </>
  )
}
export default Signup;
