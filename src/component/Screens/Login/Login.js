import React, { useEffect, useState } from 'react'
import './Login.css';
import * as Datas from '../../Datas/Datas';
import Card from '../../Card/Card';
import { Row } from 'react-bootstrap';
import axios from 'axios';
const Login = () => {
  useEffect(() => {
    // console.log("Login ");
  }, [])
  const initialval = {
    password: '',
    mobile: '',
    useredits: localStorage.getItem('useredit')
  };
  const decrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
  };
  const [state, setState] = useState(initialval);
  const submit = (e) => {
    e.preventDefault();

    // const encrypted_text = crypt("salt", "login");
    const encry_pass = crypt("salt", state.password);
    // console.log(" state.encry_pass  " +state.password+" en: " +encry_pass );
    // alert('submit'+encry_pass);
    // localStorage.setItem('useredit', encrypted_text);
    if (state.mobile.length == 0 || state.password.length == 0) {
      alert('Please enter all the details');
    }
    else {
      updateData();
    }

  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const updateData = async () => {
    const encrypted_pass = crypt("salt", state.password);
    const encrypted_text = crypt("salt", "login");
    const data = {
      password: encrypted_pass,
          mobile: state.mobile,
    };
    //console.log(data);
    let response
    try {
      response = await axios.post(Datas.User_Login, data, config);
      console.log(response);
      alert('Login Successful');
      window.location.href = '/';
      localStorage.setItem('useredit', encrypted_text);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  const updateDataonphp = () => {
    const encrypted_pass = crypt("salt", state.password);
    const encrypted_text = crypt("salt", "login");
    fetch(Datas.User_Login,
      {
        // mode: 'no-cors',
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }, body: JSON.stringify({
          // we will pass our input data to server            
          password: encrypted_pass,
          mobile: state.mobile,
          type: 'modify'
        })
      }
    ).then(res => res.json()).then(res => {
      console.log("res GETDATA");
      console.log(res);
      if (res == '2') {
        alert('Login Successful');
        window.location.href = '/';
        localStorage.setItem('useredit', encrypted_text);
      }
      else if (res == '12') {
        alert('User Not found');
      }
      else {
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
          {state.useredits != '66656d6364' ?
            <form >
              <h1 >Login</h1>
              <div className="mb-3 component-styles">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile Number"
                  name='mobile'
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="mb-1 component-styles ">

                <input
                  type="password"
                  className="form-control "
                  placeholder="Enter Password"
                  name='password'
                  onChange={e => onChange(e)}
                />
              </div>
              <div className="d-grid component-styles">
                <button type="submit" className="btn btn-primary" onClick={submit}>
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right component-styles">
                Dont have any account? <a href="/Signup">SignUp?</a>
              </p>
            </form>
            : <>You are Already Logged in</>}
        </Card>
      </div>
    </>
  )
}
export default Login;
