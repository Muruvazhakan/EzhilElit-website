import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleBlog.css';
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags';
import EmptyBlogList from '../EmptyBlogList/EmptyBlogList';
import * as Datas from "../../Datas/Datas";
import Button from '../../Button/Button';
import axios from 'axios';
import { useLocation } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const location = useLocation();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
   
    getPost();
  }, []);

  const getPost = () => {

    getPostinDB();
  }
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const getPostinDB = async () => {
    try {
      console.log( " location " + location.pathname);
      let  last = location.pathname.substring(location.pathname.lastIndexOf("/")+1 , location.pathname.length);
      console.log( last);
      let getspecpost = `${Datas.Create_Post}${last}/`;
      console.log(getspecpost + " url" + id);
      let response = await axios.get(getspecpost, config);
      // return response;
      console.log(response);
      
      if (response.data == "User already exist") {
        alert('User already exist');

      }
      else if (response.status === 200) {

        let blog = response.data[0];
        if (blog) {
          setBlog(blog);
        }
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
  return (
    <>
      <Link className='blog-goBack' to='/blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>

            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.tags.map((tag, i) => (
                <div key={i}>
                  <Tags label={tag} />
                </div>
              ))}
            </div>
          </header>
          {blog.coverimg &&
            <img src={blog.coverimg != null ? `${Datas.blogimgUrl}${blog.coverimg}` : null} alt='Ezhil Accessories image' />}
           
          <body>
          <Tags label={blog.category} />
            <p className='blog-desc'>{blog.des}</p>
            <>{blog.content.map((subcontent, index2) => {
              return <>
                <h2>{subcontent.subtitle}</h2>
                <h5>{subcontent.desc}</h5>
                {subcontent.parts.map((subheader, index3) => {
                  return <>

                    <h3 className='subheader'> {index3 + 1}) {subheader.subcontentitemheader}</h3>
                    {subheader.subcontentitemdesc && subheader.subcontentitemdesc.map((item, index4) => (
                      <h6> {item} </h6>
                    ))}

                  </>
                })}
              </>
            })}</>
          </body>
          <footer>
            <p className='blog-date'>Published: {Date(blog.createdAt)}</p>
          </footer>
          <Link style={{ padding: 10, textDecoration: 'none', alignItems: 'center' }}
            to={{
              pathname: `/newblog`,
              details: blog,
              screen: 'update'
            }}
          >
            <Button >Edit</Button>
          </Link>
        </div>
      ) : (
        <EmptyBlogList />
      )}
    </>
  );
};

export default SingleBlog;
