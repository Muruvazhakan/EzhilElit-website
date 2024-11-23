import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CreateBlogDetails.css';
import { Link } from 'react-router-dom';
import Tags from '../../Tags/Tags';
import EmptyBlogList from '../../EmptyBlogList/EmptyBlogList';
import * as Datas from "../../../Datas/Datas";
import { FormControl, InputGroup } from 'react-bootstrap';
import Button from '../../../Button/Button';
import axios from 'axios';


const CreateBlogDetails = (props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  let details = props.location.details;
  let initialval = {
    blog_id: '',
    title: '',
    category: '',
    currenttag: "",
    tags: "",
    des: "",
    coverimg: "",
    img1: '',
    comments: [],
    content: [],
    createdAt: '',
    subcontentitem: [],
    subcontentitemheader: '',
  }
  const [subcontentitemheadervalue, setsubcontentitemheadervalue] = useState('');
  const [subcontentitemdesc, setsubcontentitemdesc] = useState([]);
  const [subcontentitemdescvalue, setssubcontentitemdescvalue] = useState('');
  const [state, setstate] = useState(initialval);

  const [subcontenttile, setsubcontenttile] = useState('');
  const [subcontentdesc, setsubcontentdesc] = useState('');
  const [userloggedin, setuserloggedin] = useState(localStorage.getItem('useredit'));
  useEffect(() => {
    console.log("create blog");
    console.log(props);

    // if(props.location){
    //   initialval = {
    //     blog_id: props.location.screen ==='update' ?  props.props.location.details.blog_id :'',
    //     title:  props.location.screen ==='update' ?  props.props.location.details.title :'', 
    //     category:  props.location.screen ==='update' ?  props.props.location.details.category :'',
    //     tags:  props.location.screen ==='update' ?  props.props.location.details.tags :'', 
    //     des:  props.location.screen ==='update' ?  props.props.location.details.des :'', 
    //     coverimg: props.location.screen ==='update' ?  props.props.location.details.coverimg :'', 
    //     img1:  props.location.screen ==='update' ?  props.props.location.details.img1 :'', 
    //     comments: props.location.screen ==='update' ?  props.props.location.details.comments :'', 
    //     content: props.location.screen ==='update' ?  props.props.location.details.content :'',  
    //     createdAt: props.location.screen ==='update' ?  props.props.location.details.createdAt :'', 
    //   }
    //   setstate(initialval);
    // }
  }, [])

  const updatesingledetails = (value, setprop) => {
    // console.log(setprop, " :", value)
    setprop(value);
  };

  const updatetag = (value, prop) => {
    console.log(prop, " :", value)
    setstate({
      ...state,
      currenttag: value
    })
  };

  const addTag = (value) => {
    console.log(state);
    setstate({
      ...state,
      tags: [...state.tags, value],
      currenttag: ""
    })
  }

  const addSubcontentitem = (subcontentitemheader, subcontentitemdesc) => {
    setstate({
      ...state,
      subcontentitem: [...state.subcontentitem, {
        subcontentitemheader: subcontentitemheader,
        subcontentitemdesc: subcontentitemdesc
      }]
    });
    updatesingledetails([], setsubcontentitemdesc);
    updatesingledetails('', setsubcontentitemheadervalue);
    console.log(state);
  }

  const addSubcontentitemdesc = (subcontentitemdescvalue) => {
    setsubcontentitemdesc([...subcontentitemdesc, subcontentitemdescvalue]);
    updatesingledetails('', setssubcontentitemdescvalue);
    console.log(subcontentitemdesc, " ", subcontentitemdescvalue);
  }

  const addSubcontent = () => {
    setstate({
      ...state,
      content: [...state.content, {
        subtitle: subcontenttile,
        desc: subcontentdesc,
        parts: state.subcontentitem
      }],
      subcontentitem: []
    })
    updatesingledetails('', setsubcontenttile);
    updatesingledetails('', setsubcontentdesc);
    console.log(state);
  }

  const updatetile = (value) => {
    setstate({
      ...state,
      title: value
    })
  }
  const updatedesc = (value) => {
    setstate({
      ...state,
      des: value
    })
  }

  const updatecateg = (value) => {
    setstate({
      ...state,
      category: value
    })
  }

  const addPost = () => {
    console.log(state);
    addPostinDB();
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const addPostinDB = async () => {
   
    const data = {
    title: state.title,
    category: state.category,
    tags: state.tags,
    des: state.des,
    coverimg: state.coverimg,
    img1: state.img1,
    comments: state.comments,
    content: state.content,
    createdAt: new Date,
    
    };
    console.log(data);
    let response
    try {
      response = await axios.post(Datas.Create_Post, data, config);
      console.log(response);
      // return response;
      alert(response);
      if (response.data == "User already exist") {
        alert('User already exist');
        
      }
      else if (response.status === 201) {
        alert('Blog Created');
       
        //console.log(userExsist.data);
      }
      else {
        alert('Something went wrong!');
      }
    } catch (err) {
      console.log(err);
      alert('Something went wrong!');
      return err;
    }
  }

  let screenstyle = 'form-lable-styles screen-spacing ';
  return (
    <>
      <Link className='blog-goBack' to='/blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {userloggedin === '66656d6364' ? (
        <div className='blog-wrap'>
          <header>

            <h1>New Blog</h1>
            <InputGroup
              // as={Col} 
              className=" header-content"
            >
              {/* {props.location.screen ==='update' ?
                <>
                  <label htmlFor="Details" className={screenstyle}>Blog Id : {state.blog_id}</label>
                  <label htmlFor="Details" className={screenstyle}>Title Image:</label>
                  <label htmlFor="Details" className={screenstyle}>{state.coverimg}</label>
                </>
                : null} */}
              {/* <label htmlFor="Details" className={screenstyle}>Blog Title </label> */}
              <FormControl placeholder=" Blog Title" as="textarea" value={state.title} aria-label="With textarea"
                onChange={(e) => updatetile(e.target.value)}
              />
              {/* <label htmlFor="Details" className={screenstyle}>Description </label> */}
              <FormControl placeholder=" Description" as="textarea" value={state.des} aria-label="With textarea"
                onChange={(e) => updatedesc(e.target.value)}
              />
              <FormControl placeholder="category" as="textarea" value={state.category} aria-label="With textarea"
                onChange={(e) => updatecateg(e.target.value)}
              />
              <FormControl placeholder="Tag" as="textarea" value={state.currenttag} aria-label="With textarea"
                onChange={(e) => updatetag(e.target.value, "currenttag")}
              />


              <Button buttonColor="blue" buttonSize="btn--medium" buttonStyle="btn--outline" onClick={() => addTag(state.currenttag)}>Add tag</Button>
              {state.tags.length > 0 && state.tags.map((tag, i) => (
                <div key={i}>
                  <Tags label={tag} />
                </div>
              ))}


            </InputGroup>
            <InputGroup>
              <label htmlFor="Details" className={screenstyle}>Sub Contents </label>
              <div>
                <>  Note: Bottom to Top Level of editing
                  <div>
                    <FormControl placeholder="Sub Contents Item Desc" as="textarea" value={subcontentitemdescvalue} aria-label="With textarea"
                      onChange={(e) => updatesingledetails(e.target.value, setssubcontentitemdescvalue)}
                    />

                    <div>
                      {subcontentitemdesc.length > 0 && subcontentitemdesc.map((value) => {
                        return <>
                          <div>{value}</div>
                        </>
                      })}
                    </div>
                    <Button buttonColor="blue" buttonSize="btn--medium" buttonStyle="btn--outline"
                      onClick={() => addSubcontentitemdesc(subcontentitemdescvalue)}>Add Sub Content desc</Button>
                  </div>
                  <FormControl placeholder="Sub Contents Item Header" as="textarea" value={subcontentitemheadervalue} aria-label="With textarea"
                    onChange={(e) => updatesingledetails(e.target.value, setsubcontentitemheadervalue)}
                  />
                  <div>
                    <Button buttonColor="blue" buttonSize="btn--medium" buttonStyle="btn--outline"
                      onClick={() => addSubcontentitem(subcontentitemheadervalue, subcontentitemdesc)}>Add Sub Contentitem</Button>
                  </div>
                </>

                <FormControl placeholder="Subcontent title" as="textarea" value={subcontenttile} aria-label="With textarea"
                  onChange={(e) => updatesingledetails(e.target.value, setsubcontenttile)}
                />
                {/* <label htmlFor="Details" className={screenstyle}>Sub Contents Description </label> */}
                <FormControl placeholder="Sub Contents Description" as="textarea" value={subcontentdesc} aria-label="With textarea"
                  onChange={(e) => updatesingledetails(e.target.value, setsubcontentdesc)}
                />
                <div>
                  <Button buttonColor="blue" buttonSize="btn--medium" buttonStyle="btn--outline"
                    onClick={() => addSubcontent()}>Complete Sub Content</Button>

                  <Button buttonColor="blue" buttonSize="btn--medium" buttonStyle="btn--outline" onClick={addPost}>Complete Post</Button>
                </div>
                <div>
                  {state.subcontentitem.length > 0 && state.subcontentitem.map((subheader, index3) => {
                    return <>
                      <div className='subheader' key={index3}> {index3 + 1}) {subheader.subcontentitemheader}</div>
                      {subheader.subcontentitemdesc.length > 0 && subheader.subcontentitemdesc.map((item, index4) => (
                        <h6 key={index4}> {item} </h6>
                      ))}
                    </>
                  })}

                  {/* <label htmlFor="Details" className={screenstyle}>Sub Contents Title </label> */}

                </div>
              </div>
            </InputGroup>
          </header>

          <div className='blog-subCategory'>
            {state.tags.length > 0 && state.tags.map((tag, i) => (
              <div key={i}>
                <Tags label={tag} />
              </div>
            ))}
          </div>


          <body>
            {/* <p className='blog-desc'>{blog.des}</p> */}
            <h3>{state.content.length > 0 && state.content.map((subcontent, index2) => {
              return <>
                <h4>{subcontent.subtitle}</h4>
                <h6>{subcontent.desc}</h6>
                {subcontent.parts.map((subheader, index3) => {
                  return <>

                    <div className='subheader'> {index3 + 1}) {subheader.subcontentitemheader}</div>


                    {subheader.subcontentitemdesc && subheader.subcontentitemdesc.map((item, index4) => (
                      <h6> {item} </h6>
                    ))}

                  </>
                })}
              </>
            })}</h3>
          </body>

        </div>

      ) : <>User Login is Requied</>}
    </>
  );
};

export default CreateBlogDetails;
