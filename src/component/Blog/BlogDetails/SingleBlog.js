import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleBlog.css';
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags';
import EmptyBlogList from '../EmptyBlogList/EmptyBlogList';
import * as Datas from "../../Datas/Datas";
import Button from '../../Button/Button';


const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blog = Datas.lenspost.find((blog) => blog.id == (id));
    if (blog) {
      setBlog(blog);
    }

  }, []);

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
            <img src={blog.coverimg != null ? `${Datas.blogimgUrl}${blog.coverimg}` : null} alt='cover' />}
          <body>
            <p className='blog-desc'>{blog.des}</p>
            <h3>{blog.content.map((subcontent, index2) => {
              return <>
                <h4>{subcontent.subtitle}</h4>
                <h6>{subcontent.desc}</h6>
                {subcontent.parts.map((subheader, index3) => {
                  return <>

                    <div className='subheader'> {index3 + 1}) {subheader.subheader}</div>


                    {subheader.desc && subheader.desc.map((item, index4) => (
                      <h6> {item.desc} </h6>
                    ))}

                  </>
                })}
              </>
            })}</h3>
          </body>
          <footer>
            <p className='blog-date'>Published {blog.createdAt}</p>
          </footer>
          <Link style={{ padding: 10, textDecoration: 'none', alignItems: 'center' }}
            to={{
              pathname: `/newblog`,
              details:blog,
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
