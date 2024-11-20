
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogDetails.css';
import Tags from '../Tags/Tags';
import { blogimgUrl } from '../../Datas/Datas';

const BlogDetails = ({
  blog: {
    des,
    title,
    createdAt,
    coverimg,
    category,
    img1,
    blog_id,
  },
}) => {

  let coverimgs = `${blogimgUrl}${coverimg}`;
  return (
    <div className='blogItem-wrap'>
      <Link className='blogItem-link' to={`/blog/${blog_id}`}>
        <img className='blogItem-cover' src={coverimgs} alt='coverimg' />
        <Tags label={category} />
        <h3>{title}</h3>
        <p className='blogItem-desc'>{des}</p>
        {/* <footer>
        <div className='blogItem-author'>
          <img src={coverimgs} alt='avatar' />
          <div>
            <p>{createdAt}</p>
          </div>
        </div>
       
      </footer> */}
      </Link>
    </div>
  );
};

export default BlogDetails;
